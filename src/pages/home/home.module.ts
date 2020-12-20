import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ComponenteHeaderModule} from '../../components/componente-header/componente-header.module';
import {ComponenteCarouselModule} from '../../components/componente-carousel/componente-carousel.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ComponenteHeaderModule,
        ComponenteCarouselModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
