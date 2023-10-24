import { Movie } from './../../../models/interfaces';
import { Component } from '@angular/core';
import { FilmesService } from './filmes.service';
import { MovieResults } from '../../../models/interfaces';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  retorno!: MovieResults;
  filmes: Movie[] = [];
    // dataSource = new MatTableDataSource<any>();
  displayedColumns = ['episodio','nome', 'diretor', 'produtor', 'lancamento']

  constructor ( private service: FilmesService ) {}

  ngOnInit(): void {
    this.getFilms('');
  }

  validForm(form: NgForm){
    if (form.valid){
      console.log("formulario Ok!");
    } else {
      console.log("formulario invalido.");
      
    }
  }

  callSearch(event: any, form: NgForm){
    const busca = event.target.value;
    console.log('realizando busca = ', busca);
    if (form.valid) {
      this.filmes = [];
      this.getFilms(busca)
    }
  }

  getFilms(search: string) {
    console.log('buscando filmes...');
    this.service.getFilmes(search).subscribe( 
      response => {
        this.retorno = response;
        this.filmes = this.retorno.results;
        console.log('busca concluida');
        
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
