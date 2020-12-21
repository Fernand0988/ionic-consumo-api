import {Component, Input, OnInit} from '@angular/core';
import {DadosVinhos} from '../../models/dados-vinhos';
import {ManipularDadosObjetosService} from '../../services/manipular-dados-objetos/manipular-dados-objetos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.scss'],
})
export class DetalhesProdutoComponent implements OnInit {
  @Input() produto: DadosVinhos = {} as DadosVinhos;
  constructor(public manipularDadosObjetosService: ManipularDadosObjetosService) { }
  ngOnInit() {
    // console.log(this.produto.ratingCount);
  }
}
