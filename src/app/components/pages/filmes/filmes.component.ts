import { Filme } from './../../../models/interfaces';
import { Component } from '@angular/core';
import { FilmesService } from './filmes.service';
import { Results } from '../../../models/interfaces';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  retorno!: Results;
  filmes: Filme[] = [];
    // dataSource = new MatTableDataSource<any>();
  displayedColumns = ['episodio','nome', 'diretor', 'produtor', 'lancamento']

  constructor ( private service: FilmesService ) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.service.getFilmes().subscribe( 
      response => {
        this.retorno = response;
        this.filmes = this.retorno.results;
    });
  }

  formatData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }

  loadingPage(): boolean {
    return this.filmes.length > 0;
  }
}
