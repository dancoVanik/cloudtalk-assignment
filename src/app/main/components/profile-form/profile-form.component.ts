import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResourceProviderService} from '../../../resources/resource-provider.service';
import {Profile} from '../../../resources/models/profile';
import {BehaviorSubject} from 'rxjs';
import {UserDataService} from '../../services/user-data.service';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit, OnDestroy {

    @Input() customBgColor: string
    @Output() submitEvent: EventEmitter<boolean>

    public profileFormGroupControl: FormGroup;
    public dataSending$: BehaviorSubject<boolean>;
    public messageSuccess: boolean;

    constructor(private _resourceService: ResourceProviderService,
                private _userDataService: UserDataService) {
        this.dataSending$ = new BehaviorSubject<boolean>(false)
        this.messageSuccess = false
        this.submitEvent = new EventEmitter<boolean>()
    }

    submit() {
        if (this.profileFormGroupControl.valid) {
            this.submitEvent.emit(true)
            this.messageSuccess = true
            this._userDataService.setUserDataFormGroupControl(this.profileFormGroupControl)
            setTimeout(() => {
                this.messageSuccess = false;
            }, 1000);
            const body = {
                name: this.profileFormGroupControl.get('nameControl').value,
                email: this.profileFormGroupControl.get('emailControl').value,
                phone_number: this.profileFormGroupControl.get('phoneControl').value
            } as Profile
            this.dataSending$.next(true)
            this._resourceService.post$<Profile>('post', ResourceProviderService.SERVER_URL, body).subscribe(() => {
                this.dataSending$.next(false)
            });
        }
    }

    reset() {
        this.profileFormGroupControl.reset()
        this.submitEvent.emit(false)
        this._userDataService.setUserDataFormGroupControl(this.profileFormGroupControl)
    }

    ngOnInit(): void {
        this.profileFormGroupControl = new FormGroup({
            nameControl: new FormControl('', Validators.required),
            emailControl: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            phoneControl: new FormControl('', [
                Validators.pattern('[- +()0-9]+')
            ]),
        });
    }

    ngOnDestroy(): void {
        this.dataSending$.complete()
        this.submitEvent.complete()
    }

}
