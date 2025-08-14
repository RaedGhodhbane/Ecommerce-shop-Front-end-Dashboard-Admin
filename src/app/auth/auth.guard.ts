import { inject, Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tokenGetter } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 

  if (tokenGetter().length > 0) {
    return true; 
  }

  return router.navigateByUrl('/auth/login');
};
