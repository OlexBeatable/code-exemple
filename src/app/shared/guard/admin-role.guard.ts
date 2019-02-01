import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AdminRoleGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user_role') === 'admin') {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
