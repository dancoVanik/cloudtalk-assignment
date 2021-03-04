import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private _router: Router,
                private _authenticationService: AuthenticationService) {
    }

    login() {
        this._authenticationService.login()
        this._router.navigateByUrl('');
    }

    ngOnInit(): void {
    }

}
