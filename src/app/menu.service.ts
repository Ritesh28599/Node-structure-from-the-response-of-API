import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/';

  constructor(private http: HttpClient) {}

  getRootElements(): Observable<any> {
     return this.http.get<any[]>(`${this.apiUrl}173`);

  }

  getChildElements(elementId: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}173`);
  }
  
}





  
