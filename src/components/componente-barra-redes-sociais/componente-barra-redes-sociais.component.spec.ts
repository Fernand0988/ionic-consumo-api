import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponenteBarraRedesSociaisComponent } from './componente-barra-redes-sociais.component';

describe('ComponenteBarraRedesSociaisComponent', () => {
  let component: ComponenteBarraRedesSociaisComponent;
  let fixture: ComponentFixture<ComponenteBarraRedesSociaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteBarraRedesSociaisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteBarraRedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
