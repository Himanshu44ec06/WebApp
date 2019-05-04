import { Injectable } from '@angular/core';
import {
 HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

export class  AuthInterceptor  implements  HttpInterceptor  {
    constructor(){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get Auth Token from Store.
    const  authToken = '';
     /*
     * The verbose way:
     // Clone the request and replace the original headers with
     // cloned headers, updated with the authorization.
     const authReq = req.clone({
       headers: req.headers.set('Authorization', authToken)
     });
     */
     // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

     // send cloned request with header to the next handler.
    return next.handle(authReq);
    }
}
