import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login=true;
  constructor() { }

  public isAuthenticated(): boolean { ;  
    return this.login;
  }
}
