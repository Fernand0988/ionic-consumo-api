import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {DadosVinhos} from '../../models/dados-vinhos';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  vinhosRecomendados: Array<DadosVinhos>;
  constructor(private apiService: ApiService,
              private router: Router) {}

  ngOnInit(): void {
    this.apiService.obterDados().then(resultado => {
      this.vinhosRecomendados = resultado['recommendedWines'];
      console.log(this.vinhosRecomendados);
    }).catch(erro => {
      console.log(erro);
    });
  }
  produtoEscolhido(produto: DadosVinhos) {
    localStorage.setItem('vinhoEscolhido', JSON.stringify(produto));
    this.router.navigateByUrl('/produto');
  }
}
