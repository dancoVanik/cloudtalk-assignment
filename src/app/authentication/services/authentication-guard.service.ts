import {Injectable} from '@angular/core';
import {AuthenticationModule} from '../authentication.module';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
    providedIn: AuthenticationModule
})
export class AuthenticationGuardService implements CanActivate {

    private readonly _loginUrl = '/login';

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isLoggedIn = !!this._authenticationService.verified()
        if (!isLoggedIn) {
            this._router.navigateByUrl(this._loginUrl);
        }
        return isLoggedIn
    }
}
