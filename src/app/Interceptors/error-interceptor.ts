import { Injectable,Injector,ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export  class  ErrorInterceptor implements  ErrorHandler  {
  constructor(private injector: Injector){
  }

  handleError(error: Error | HttpErrorResponse): void {
    if (error instanceof  HttpErrorResponse) {
         if (navigator.onLine) {
               // notify  lost internet connection
         } else {
             // notify  other status based on error.status
         }
    } else {
         //  Handle  Client Error  (Angular Error,  Reference Error...)
    }

    //  Log error anyway
    console.error('It happens: ', error);
}

}
