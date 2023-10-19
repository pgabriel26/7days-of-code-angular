import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private url = 'https://swapi.dev/api/films';

  constructor( private http: HttpClient ) { }

  getFilmes() {
    return this.http.get(this.url);
  }
}
