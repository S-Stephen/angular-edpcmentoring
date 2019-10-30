// https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
// This class will intercept http error across the application

import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { CamplNgMessageBufferService } from "./campl-ng-message-buffer.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(public messageService: CamplNgMessageBufferService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // send our error message to the message service
        // to display / hide somewhere on the page/
        this.messageService.sendMessage(errorMessage);
        //window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
