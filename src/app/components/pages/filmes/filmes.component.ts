import { Component } from '@angular/core';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes: any;
  // dataSource = new MatTableDataSource<any>();
  displayedColumns = ['episodio','nome', 'diretor', 'produtor', 'lancamento']

  constructor ( private service: FilmesService ) {}

  ngOnInit() {
    this.service.getFilmes().subscribe( response => {
      this.filmes = response;
      console.log('Filmes encontrados', this.filmes.results);
      // next: response => this.filmes = response,
      // complete: () => console.log('Filmes encontrados', this.filmes.results)
    } 
    )
    
  }
}
