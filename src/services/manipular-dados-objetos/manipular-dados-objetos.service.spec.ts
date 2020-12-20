import { TestBed } from '@angular/core/testing';

import { ManipularDadosObjetosService } from './manipular-dados-objetos.service';

describe('ManipularDadosObjetosService', () => {
  let service: ManipularDadosObjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManipularDadosObjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
