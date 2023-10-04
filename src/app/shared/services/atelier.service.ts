import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import { Atelier } from '../models/atelier';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private httpService : ApiService){}

  getAtelier(id: number) {
    
   return this.httpService.get(`/atelier/get/${id}`);
  }

  getAllAtelier() {
    
   return this.httpService.get(`/atelier/get`);
  }

  createAtelier(formData: FormData): Observable<Object>{
   return this.httpService.post({endpoint : '/atelier/add', data : formData});
  }

  updateAtelier(atelier : Atelier) {
   return this.httpService.put({endpoint : '/atelier/update',data : atelier});
 }


  deleteAtelier(atelier_id : any) {
    return this.httpService.delete(`/atelier/delete/${atelier_id}`);
  }

}
