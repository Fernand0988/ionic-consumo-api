import {NgModule} from '@angular/core';
import {ComponenteCarouselComponent} from './componente-carousel.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    exports: [ComponenteCarouselComponent],
    imports: [IonicModule, CommonModule],
    declarations: [ComponenteCarouselComponent]
})
export class ComponenteCarouselModule {}
