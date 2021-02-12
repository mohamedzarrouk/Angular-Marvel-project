import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  private baseUrl = 'http://localhost:8080/marvel.com/apigateway';

  constructor(private http: HttpClient) { }

    getPersonnage(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

    createPersonnage(personnage: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, personnage);
  }


  deletePersonnage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPersonnageList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
