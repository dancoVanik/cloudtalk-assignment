import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../authentication/services/authentication.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private _router: Router,
                private _authenticationService: AuthenticationService) {
    }

    logout() {
        this._authenticationService.logout()
        this._router.navigateByUrl('/login');
    }

    ngOnInit(): void {
    }

}
