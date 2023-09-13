import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private httpService : ApiService){}

   getArticle(id: number) {
     
    return this.httpService.get(`/article/get/${id}`);
   }

   getAllArticle() {
     
    return this.httpService.get(`/article/get`);
   }

   createArticle(article : Article): Observable<Object>{
    return this.httpService.post({endpoint : '/article/add', data : article});
   }

   updateArticle(article : Article) {
    return this.httpService.put({endpoint : '/article/update',data : article});
  }

 
   deleteArticle(article_id : any) {
     return this.httpService.delete(`/article/dele${article_id}`);
   }

}
