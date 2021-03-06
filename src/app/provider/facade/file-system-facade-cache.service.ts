import { Injectable } from '@angular/core';
import { DataSource } from './model/data-source';
import { FileSystemFacade } from './file-system-facade';
import { Observable, of, throwError } from 'rxjs';
import { BitbucketService } from '../bitbucket/bitbucket.service';
import { concatMap, map, tap } from 'rxjs/operators';
import { BitbucketFileSystemFacadeService } from '../bitbucket/bitbucket-file-system-facade.service';

@Injectable({
    providedIn: 'root'
})
export class FileSystemFacadeCacheService {
    private readonly facadesById: { [key: string]: FileSystemFacade };

    constructor(
        private bitbucketService: BitbucketService
    ) {
        this.facadesById = {};
    }

    get(id: string): Observable<FileSystemFacade> {
        if (id === null) {
            return throwError('Id cannot be null');
        } else {
            return this.bitbucketService.list()
                .pipe(
                    map(configs => {
                        return configs.map(config => new DataSource(
                            `bb-${config.workspace.name}-${config.repository.name}`,
                            `${config.workspace.name}/${config.repository.name}`,
                            'BITBUCKET',
                            config
                        ));
                    }),
                    concatMap(datasources => {
                        const datasource: DataSource = datasources.find(ds => ds.id === id);

                        if (datasource && datasource.type === 'BITBUCKET') {
                            if (this.facadesById[id]) {
                                return of(this.facadesById[id]);
                            } else {
                                return this.bitbucketService.createBitbucketClient(datasource.config).pipe(
                                    tap(result => {
                                        setTimeout(() => {
                                            this.facadesById[id] = null;
                                        }, result.expiresIn);
                                    }),
                                    map(bc => new BitbucketFileSystemFacadeService(datasource, bc)),
                                    tap(facade => {
                                        this.facadesById[id] = facade as FileSystemFacade;
                                    })
                                );
                            }
                        } else {
                            return throwError('unknown datasource: ' + datasource);
                        }
                    })
                );
        }
    }

    refresh(facade: FileSystemFacade): Observable<void> {
        return facade.refresh()
            .pipe(concatMap(() => {
                this.facadesById[facade.getDataSource().id] = facade as FileSystemFacade;
                return this.bitbucketService.refresh(facade.getDataSource().config);
            }));
    }
}
