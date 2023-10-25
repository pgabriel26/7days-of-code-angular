import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
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
  pagina = 1;

  displayedColumns: string[] = ['fabricante','nome','modelo',
                      'tamanho','capacidade','preco',
                      'equipe','classe','ranking','criada'];

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

  getStarships(search: string, pagina?: number) {
    console.log('buscando naves...');
    
    this.service.getNaves(search, pagina).subscribe( 
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

  changePagination(e: PageEvent) {
    this.pagina = e.pageIndex + 1;
    this.naves = [];
    this.getStarships('', this.pagina)
  }

}
