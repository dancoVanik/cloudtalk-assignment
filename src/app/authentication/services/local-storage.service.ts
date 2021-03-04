import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
    }

    getData(key: string): Object {
        return JSON.parse(localStorage.getItem(key));
    }

    setData(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    removeData(key: string) {
        localStorage.removeItem(key);
    }
}
