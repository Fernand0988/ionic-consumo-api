import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {DetalhesProdutoComponent} from './detalhes-produto.component';
import {ComponenteStarRatingModule} from '../componente-star-rating/componente-star-rating.module';
@NgModule({
    imports: [IonicModule, ComponenteStarRatingModule],
    exports: [DetalhesProdutoComponent],
    declarations: [DetalhesProdutoComponent]
})
export class DetalhesProdutoModule {}
