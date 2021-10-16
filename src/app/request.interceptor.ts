import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  isAuth = true;
  constructor(private loaderService: LoaderService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('FORM INTERCEPTOR', request);

    // SHOW LOADER
    this.loaderService.setIsLoading(true);


    const UpdatedRequest = request.clone({
      headers: this.isAuth
        ? request.headers.append(
            'Autherization',
            'sd3a4ds5d4a23sd4a65sdada65ds'
          )
        : request.headers,
      params: request.params.append('limit', '5'),
    });
    console.log(UpdatedRequest);

    // REQUEST REACH TO SERVER
    return (
      next
        .handle(UpdatedRequest)
        // AFTER REQUEST FINISHED
        .pipe(finalize(() => this.loaderService.setIsLoading(false)))
    );
  }
}
