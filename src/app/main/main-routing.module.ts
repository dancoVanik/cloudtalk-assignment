import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuardService} from '../authentication/services/authentication-guard.service';
import {NgModule} from '@angular/core';
import {MainComponent} from './components/main/main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthenticationGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule {
}
