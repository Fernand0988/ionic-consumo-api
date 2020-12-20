import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoPageRoutingModule } from './produto-routing.module';

import { ProdutoPage } from './produto.page';
import {ComponenteHeaderModule} from '../../components/componente-header/componente-header.module';
import {DetalhesProdutoModule} from '../../components/detalhes-produto/detalhes-produto.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProdutoPageRoutingModule,
        ComponenteHeaderModule,
        DetalhesProdutoModule
    ],
  declarations: [ProdutoPage]
})
export class ProdutoPageModule {}
