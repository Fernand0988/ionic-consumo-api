import {NgModule} from '@angular/core';
import {ComponenteHeaderComponent} from './componente-header.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [IonicModule, CommonModule],
    exports: [ComponenteHeaderComponent],
    declarations: [ComponenteHeaderComponent]
})
export class ComponenteHeaderModule {}
