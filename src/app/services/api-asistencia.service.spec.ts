import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiAsistenciaService } from './api-asistencia.service';

describe('TEST ApiAsistenciaService', () => {

  let service: ApiAsistenciaService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient',['get'])
    service = new ApiAsistenciaService(httpClientSpy as any)

    TestBed.configureTestingModule({
      declarations:[],
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ApiAsistenciaService);
  });

  // Servicio creado 
  it('Servicio creado correctamente', () => {
    expect(service).toBeTruthy();
  });


});
