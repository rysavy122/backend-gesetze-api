import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
  
})
export class ServService {

  apiUrl = 'http://localhost:3000/gesetze';


  
  constructor(private http: HttpClient) { }
  

/*   getData(){
    return this.http.get('http://localhost:3000/gesetze')
    .pipe(
      map((response: any) => response.map(item => item['title']))
    )
  } */
  getData() {
    return this.http.get(this.apiUrl);
  }
/*   getData(id:string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  } */
}
