import { CanActivateFn, Router } from '@angular/router';
import { getRoleFromToken } from './auth/auth.util';
import { inject } from '@angular/core';

export const userGuardGuard: CanActivateFn = (route, state) => {
 const router = inject(Router);
  const role = getRoleFromToken();
  if (role ==='USER') {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
