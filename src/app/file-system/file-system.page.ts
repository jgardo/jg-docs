import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileSystemFacade } from '../provider/facade/file-system-facade';
import { FileSystemEntry } from '../provider/facade/model/file-system-entry';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-file-system',
    templateUrl: 'file-system.page.html',
    styleUrls: ['file-system.page.scss']
})
export class FileSystemPage implements OnInit, OnDestroy {

    fileSystemFacade: FileSystemFacade;
    fileSystemEntry: FileSystemEntry;

    private routeDataSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.routeDataSubscription = this.route.data.subscribe(data => {
            this.fileSystemEntry = data.fileSystemEntry as FileSystemEntry;
        });
    }

    ngOnDestroy() {
        this.routeDataSubscription.unsubscribe();
    }

    goToItem(item: FileSystemEntry) {
        const asArray = item.path.substr(1).split('/');

        const fileSystemPrefix = item.type === 'DIRECTORY'
                ? this.getFileSystemPrefix()
                : this.getFilePrefix();
        this.router.navigate([fileSystemPrefix].concat(asArray));
    }

    goBack() {
        const parentPath = this.fileSystemEntry.path
            .substr(0, this.fileSystemEntry.path.lastIndexOf('/'))
            .substr(1);
        const asArray = parentPath.split('/');

        this.router.navigate([this.getFileSystemPrefix()].concat(asArray));
    }

    private getFileSystemPrefix() {
        return '/tabs/file-system/' + this.fileSystemEntry.dataSource.id;
    }

    private getFilePrefix() {
        return '/tabs/file/' + this.fileSystemEntry.dataSource.id;
    }

    loadData($event: any) {
        // TODO load next page
    }
}