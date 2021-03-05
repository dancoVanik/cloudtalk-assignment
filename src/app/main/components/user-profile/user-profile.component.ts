import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    public colorControl: FormControl;
    public customBgColor: string

    constructor() {
        this.colorControl = new FormControl('#EBF2FF')
    }

    dataWasSubmitSuccessfully(event: boolean) {
        this.customBgColor = event ? this.colorControl.value : 'white'
    }

    ngOnInit(): void {
    }

}
