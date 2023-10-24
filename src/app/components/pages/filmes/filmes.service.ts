import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResults, PeopleResults } from '../../../models/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

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

  getPessoas(search: string): Observable<PeopleResults> {
    return this.http.get<PeopleResults>(this.url + "people/?search=" + search);
  }
}
