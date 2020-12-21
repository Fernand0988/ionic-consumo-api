import {Component, Input, OnInit} from '@angular/core';
import {RotasUrlService} from '../../services/rotas-url/rotas-url.service';

@Component({
  selector: 'app-componente-barra-redes-sociais',
  templateUrl: './componente-barra-redes-sociais.component.html',
  styleUrls: ['./componente-barra-redes-sociais.component.scss'],
})
export class ComponenteBarraRedesSociaisComponent {
  @Input() linkProduto: string;
  constructor(public  rotasUrlService: RotasUrlService) { }
}
