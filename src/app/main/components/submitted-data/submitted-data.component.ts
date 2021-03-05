import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserDataService} from '../../services/user-data.service';

@Component({
    selector: 'app-submitted-data',
    templateUrl: './submitted-data.component.html',
    styleUrls: ['./submitted-data.component.scss'],
    providers: [UserDataService]
})
export class SubmittedDataComponent implements OnInit {

    public submittedDataFormGroupControl: FormGroup

    constructor(private _userDataService: UserDataService) {
    }

    ngOnInit(): void {
        this.submittedDataFormGroupControl = new FormGroup({
            nameControl: new FormControl(null),
            emailControl: new FormControl(null),
            phoneControl: new FormControl(null),
        });
        this.submittedDataFormGroupControl.disable()

        this._userDataService.userDataFormGroupControl$.subscribe(groupControl => {
            this.submittedDataFormGroupControl = groupControl
        });
    }

}
