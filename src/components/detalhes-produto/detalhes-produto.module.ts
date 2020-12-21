import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {DetalhesProdutoComponent} from './detalhes-produto.component';
import {ComponenteStarRatingModule} from '../componente-star-rating/componente-star-rating.module';
import {ComponenteBarraRedesSociaisModule} from '../componente-barra-redes-sociais/componente-barra-redes-sociais.module';
@NgModule({
    imports: [IonicModule, ComponenteStarRatingModule, ComponenteBarraRedesSociaisModule],
    exports: [DetalhesProdutoComponent],
    declarations: [DetalhesProdutoComponent]
})
export class DetalhesProdutoModule {}
