import {Injectable, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable()
export class UserDataService implements OnDestroy {

    public static readonly NAME_CONTROL = 'nameControl'
    public static readonly EMAIL_CONTROL = 'emailControl'
    public static readonly PHONE_CONTROL = 'phoneControl'

    private readonly _userDataFormGroupControl$: ReplaySubject<FormGroup>

    constructor() {
        this._userDataFormGroupControl$ = new ReplaySubject<FormGroup>(1)
    }

    get userDataFormGroupControl$(): Observable<FormGroup> {
        return this._userDataFormGroupControl$.asObservable();
    }

    setUserDataFormGroupControl(groupControl: FormGroup) {
        this._userDataFormGroupControl$.next(groupControl)
    }

    ngOnDestroy(): void {
        this._userDataFormGroupControl$.complete();
    }
}
