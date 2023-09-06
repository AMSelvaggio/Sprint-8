import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private baseUrl: string = 'https://swapi.py4e.com/api';

 public currentPage = 1;

  constructor(private http: HttpClient) {}

 

getAllStarships(page: number = this.currentPage): Observable<any> {
  return this.http.get(`https://swapi.dev/api/starships/?page=${page}`);
}

  getStarshipById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/starships/${id}/`);


  }

  

  getShipDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/starships/${id}/`);
  }

  getPilotDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  
  getPilotId(url: string): number {
   
    return +url.split("/").filter(Boolean).pop()!;
  }
}
  

