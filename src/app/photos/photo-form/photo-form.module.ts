import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule
    ]
})
export class PhotoFormModule { }