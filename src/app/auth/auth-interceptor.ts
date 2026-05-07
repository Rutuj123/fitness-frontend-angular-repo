import { HttpInterceptorFn } from '@angular/common/http';
import { isTokenExpired } from './auth.util';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService=inject(AuthService)
  if(req.url.includes('/auth/login') || req.url.includes('/auth/register')){
    return next(req);
  }
  const token=localStorage.getItem('token');
  console.log("token      ...."+token)
  if(token){
    req=req.clone({
       setHeaders:{
        Authorization: `Bearer ${token}`
       }
    });
  }
  if (isTokenExpired()) {
    authService.logout();
    return next(req); // stop attaching token
  }
 return next(req);
};
