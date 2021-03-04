import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginFormGroupControl: FormGroup
    public hide: boolean;

    constructor(private _router: Router, private _authenticationService: AuthenticationService) {
        this.hide = true
    }

    login() {
        this._authenticationService.login()
        this._router.navigateByUrl('');
    }

    ngOnInit(): void {
        this.loginFormGroupControl = new FormGroup({
            loginControl: new FormControl(''),
            passwordControl: new FormControl(''),
        });
    }

}
