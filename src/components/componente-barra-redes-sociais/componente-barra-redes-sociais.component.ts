import {Component, Input} from '@angular/core';
import {RotasUrlService} from '../../services/rotas-url/rotas-url.service';
import { Plugins } from '@capacitor/core';
const { Clipboard } = Plugins;
@Component({
  selector: 'app-componente-barra-redes-sociais',
  templateUrl: './componente-barra-redes-sociais.component.html',
  styleUrls: ['./componente-barra-redes-sociais.component.scss'],
})
export class ComponenteBarraRedesSociaisComponent {

  @Input() linkProduto: string;
  constructor(public  rotasUrlService: RotasUrlService) { }
  async copy(name: string, text: string){
    Clipboard.write({
      string:  name + ' is ' + text
    });
  }
}
