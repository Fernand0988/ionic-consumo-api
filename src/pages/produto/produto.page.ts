import { Component, OnInit } from '@angular/core';
import {DadosVinhos} from '../../models/dados-vinhos';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  produto: DadosVinhos = {} as DadosVinhos;
  constructor() { }

  ngOnInit() {
    this.produto = JSON.parse(localStorage.getItem('vinhoEscolhido'));
  }

}
