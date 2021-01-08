import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileSystemPage } from './file-system.page';

import { FileSystemPageRoutingModule } from './file-system-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        FileSystemPageRoutingModule
    ],
    declarations: [FileSystemPage]
})
export class FileSystemPageModule {
}
