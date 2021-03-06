import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ResourceProviderService} from '../../../resources/services/resource-provider.service';
import {HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    public colorControl: FormControl;
    public customBgColor: string
    public resourceMessage: string
    public resourceIcon: string

    constructor(private _resourceService: ResourceProviderService) {
        this.colorControl = new FormControl('#EBF2FF')
    }

    dataWasSubmitSuccessfully(event: boolean) {
        this.customBgColor = event ? this.colorControl.value : 'white'
    }

    ngOnInit(): void {
        this.setMessageWithIcon('Loading', 'restart_alt')
        this.loadFooData('bar1')
            .subscribe(() => {
                this.loadFooData('bar2')
                    .subscribe(() => {
                        this.loadFooData('bar3')
                            .subscribe(() => {
                                this.setMessageWithIcon('Loaded', 'done')
                            });
                    });
            });
    }

    loadFooData(paramValue: string): Observable<any> {
        return this._resourceService.get$('get', ResourceProviderService.SERVER_URL, new HttpParams().append('foo', paramValue))
            .pipe(
                catchError((err) => {
                    console.log(err)
                    this.setMessageWithIcon('Error', 'error')
                    return of()
                })
            )
    }

    setMessageWithIcon(message: string, icon: string) {
        this.resourceMessage = message;
        this.resourceIcon = icon;
    }

}
