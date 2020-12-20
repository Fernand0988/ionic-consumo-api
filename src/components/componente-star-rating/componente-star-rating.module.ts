import {NgModule} from '@angular/core';
import {ComponenteStarRatingComponent} from './componente-star-rating.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [ComponenteStarRatingComponent],
    declarations: [ComponenteStarRatingComponent],
    imports: [IonicModule, CommonModule]
})
export class ComponenteStarRatingModule {}
