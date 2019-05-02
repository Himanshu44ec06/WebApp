import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorHandler } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './url-interceptor';

/* barrel for Interceptors */

export  const InterceptorsProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true },
    { provide: ErrorHandler, useClass: ErrorInterceptor},
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer}
];
