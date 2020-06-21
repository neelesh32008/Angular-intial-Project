import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class Token implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            setHeaders: {
                Authorization: `${this.userService.getToken()}`
            }
        });

        return next.handle(request);
    }

}
