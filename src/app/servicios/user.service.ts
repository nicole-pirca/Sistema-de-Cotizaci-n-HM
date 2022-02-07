import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modelos/user';
import { Global } from './global';

@Injectable()
export class UserService {
  url: string = Global.url;
  constructor(private readonly _htppClient: HttpClient) { }


  addUser(user: User) {
    return this._htppClient.post(this.url + '/User', user);
  }
}
