import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from '../../../models/interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private url = 'https://swapi.dev/api/films';

  constructor( private http: HttpClient ) { }

  getFilmes(): Observable<Results> {
    return this.http.get<Results>(this.url);
  }
}
