
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider'

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        MatSliderModule,
        MatDatepickerModule, MatInputModule,MatNativeDateModule
        // MatFormFieldModule
    ],
    exports: [
        MatSliderModule,
        MatDatepickerModule, MatInputModule,MatNativeDateModule
        // MatFormFieldModule
    ]
})
export class MaterialsModule{
}