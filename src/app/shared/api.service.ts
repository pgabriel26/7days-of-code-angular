import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MovieResults, StarshipResults } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://swapi.dev/api/';

  constructor( private http: HttpClient ) { }

  getFilmes(search: string): Observable<MovieResults> {
    let tempUrl: string ='';
    if(search == ''){
      tempUrl = 'films';
    } else {
      tempUrl = `films/?search=${search}`;
    }
    return this.http.get<MovieResults>(`${this.url}${tempUrl}`);
  }

  getNaves(search: string): Observable<StarshipResults> {
    let tempUrl: string ='';
    if(search == ''){
      tempUrl = 'starships';
    } else {
      tempUrl = `starships/?search=${search}`;
    }
    return this.http.get<StarshipResults>(`${this.url}${tempUrl}`);
  }

  // getPessoas(search: string): Observable<PeopleResults> {
  //   return this.http.get<PeopleResults>(this.url + "people/?search=" + search);
  // }
}
