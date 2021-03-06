import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResourceProviderService {

    public static readonly SERVER_URL = 'https://postman-echo.com'

    constructor(private _httpClient: HttpClient) {
    }

    public get$<T>(endpoint?: string, url?: string, params ?: HttpParams, headers ?: HttpHeaders,
                   responseType ?: ResponseType): Observable<T> {
        return this._httpClient.get<T>(ResourceProviderService._sanitizeUrl(endpoint, url),
            {
                headers,
                params,
                responseType: 'json',
                observe: 'body'
            });
    }

    public post$<T>(endpoint?: string, url?: string, body ?: object, params ?: HttpParams, headers ?: HttpHeaders,
                    responseType ?: ResponseType): Observable<T> {
        return this._httpClient.post<T>(ResourceProviderService._sanitizeUrl(endpoint, url),
            body,
            {
                headers,
                params,
                responseType: 'json',
                observe: 'body'
            });
    }

    private static _sanitizeUrl(endpoint?: string, url?: string): string {
        return url !== undefined && url !== null && endpoint !== undefined && endpoint !== null ? url + '/' + endpoint : endpoint !== undefined && endpoint !== null ? ResourceProviderService.SERVER_URL + '/' + endpoint : ResourceProviderService.SERVER_URL
    }
}
