import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private url: string = '/assets/films.json';

  constructor( private http: HttpClient ) { }

  getFilmes() {
    return this.http.get(this.url);
  }
}
