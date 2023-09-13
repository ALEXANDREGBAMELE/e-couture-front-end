import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : ApiService) { }

  getUser(id: number) {
     
    return this.httpService.get(`/user/get/${id}`);
   }

   getAllUsers() {
     
    return this.httpService.get(`/user/get`);
   }

   createUser(user : User): Observable<Object>{
    return this.httpService.post({endpoint : '/user/add', data : user});
   }

   updateArticle(user : User) {
    return this.httpService.put({endpoint : '/user/update',data : user});
  }

 
   deleteArticle(user_id : any) {
     return this.httpService.delete(`/user/dele${user_id}`);
   }
}
