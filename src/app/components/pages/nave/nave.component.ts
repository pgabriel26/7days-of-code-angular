import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Starship, StarshipResults } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent {

  retorno!: StarshipResults;
  naves: Starship[] = [];

  displayedColumns = ['fabricante','nome','modelo',
                      'tamanho','capacidade','preco',
                      'equipe','classe','ranking',
                      'pilotos','filme','criada'];

  constructor( private service: ApiService) {}

  ngOnInit():  void {
    this.getStarships('');
  }

  callSearch(event: any, form: NgForm){
    const busca = event.target.value;
    console.log('realizando busca = ', busca);
    if (form.valid) {
      this.naves = [];
      this.getStarships(busca)
    }
  }

  getStarships(search: string) {
    console.log('buscando naves...');
    
    this.service.getNaves(search).subscribe( 
      response => {
        this.retorno = response;
        this.naves = this.retorno.results;
        console.log('busca concluida');
        console.log(this.naves); 
    });
  }

  formatData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }

}
