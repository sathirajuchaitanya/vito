import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{IUser} from '../models/IUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<IUser[]>(`/users`);
    }

    register(user: IUser) {
        return this.http.post(`/users/register`, user);
    }
}
