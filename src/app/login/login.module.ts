import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        BrowserAnimationsModule
    ]
})
export class LoginModule { }
