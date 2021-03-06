import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {SubmittedDataComponent} from './components/submitted-data/submitted-data.component';
import {ProfileFormComponent} from './components/profile-form/profile-form.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {MaterialModule} from '../material/material.module';
import {UserDataService} from './services/user-data.service';
import {MainRoutingModule} from './main-routing.module';


@NgModule({
    declarations: [
        MainComponent,
        SubmittedDataComponent,
        ProfileFormComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        MainRoutingModule
    ],
    providers: [UserDataService]
})
export class MainModule {
}
