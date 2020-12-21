import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DadosVinhos} from '../../models/dados-vinhos';
import {ManipularDadosObjetosService} from '../../services/manipular-dados-objetos/manipular-dados-objetos.service';

@Component({
  selector: 'app-componente-carousel',
  templateUrl: './componente-carousel.component.html',
  styleUrls: ['./componente-carousel.component.scss'],
})
export class ComponenteCarouselComponent implements OnChanges {
  screenHeight: number;
  screenWidth: number;
  @Output() itemEscolhido: EventEmitter<DadosVinhos> = new EventEmitter<DadosVinhos>();
  @Input() vinhosRecomendados = new Array<DadosVinhos>();
  vinhosParaExibicao: Array<number>;
  sliderConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false
  };
  constructor(public manipularDadosService: ManipularDadosObjetosService) {

  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 900) {
      this.sliderConfig.slidesPerView = 3;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getScreenSize();
    if (this.vinhosRecomendados.length > 5) {
      this.vinhosParaExibicao = this.manipularDadosService.retornarNumerosAleatorios(0, this.vinhosRecomendados.length, 5, false);
    } else {
      this.vinhosParaExibicao = this.manipularDadosService.retornarArrayTamanhoVetor(this.vinhosRecomendados);
    }
  }
  retornarObjeto(posicao: number): DadosVinhos {
    return  this.vinhosRecomendados[posicao];
  }
  verDetalhesProduto(detalhesProduto: DadosVinhos) {
    this.itemEscolhido.emit(detalhesProduto);
  }
}
