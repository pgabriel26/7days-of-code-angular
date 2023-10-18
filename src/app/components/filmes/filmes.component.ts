import { Component } from '@angular/core';
import { FilmesService } from './filmes.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: any;

  constructor ( private service: FilmesService ) {}

  ngOnInit() {
    this.service.getFilmes().subscribe({
      next: response => this.filmes = response,
      complete: () => console.log('Filmes encontrados', this.filmes)
    } 
    )
    
  }
}
