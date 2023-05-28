import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "../classes/auth.class";

@Injectable()
export class AuthService {
  private authKey = 'auth';

  public constructor(private router: Router) { }

  public login(email: string, password: string) {
    let auth = new Auth();
    auth.logged = true;
    localStorage.setItem(this.authKey, JSON.stringify(auth));
  }

  public logout() {
    localStorage.setItem(this.authKey, JSON.stringify(new Auth()));
    this.router.navigate(['/user/login']);
  }

  public isLogged() {
    let authJson: string | null = localStorage.getItem(this.authKey);
    if (authJson) {
      return JSON.parse(authJson).logged;
    }
    return false;
  }
}
