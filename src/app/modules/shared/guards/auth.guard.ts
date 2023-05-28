import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const authGuard = (next: ActivatedRouteSnapshot) => {
    return inject(AuthService).isLogged() ? true : createUrlTreeFromSnapshot(next, ['/user/login']);
};