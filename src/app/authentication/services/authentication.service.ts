import {Injectable} from '@angular/core';
import {AuthenticationModule} from '../authentication.module';
import {LocalStorageService} from './local-storage.service';


@Injectable({
    providedIn: AuthenticationModule
})
export class AuthenticationService {

    public static readonly AUTH_KEY = 'isLoggedIn'

    constructor(private _localStorageService: LocalStorageService) {
    }

    verified(): boolean {
        return !!this._localStorageService.getData(AuthenticationService.AUTH_KEY)
    }

    login() {
        this._localStorageService.setData(AuthenticationService.AUTH_KEY, true)
    }

    logout() {
        this._localStorageService.removeData(AuthenticationService.AUTH_KEY)
    }

}
