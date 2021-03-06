import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = error.error instanceof ErrorEvent ?
                        `Error: ${error.error.message}` :
                        `Error Code: ${error.status}\nMessage: ${error.message}`;
                    return throwError(errorMessage);
                })
            )
    }
}
