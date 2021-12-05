import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiAsistenciaService } from './api-asistencia.service';

describe('ApiAsistenciaService', () => {
  let service: ApiAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ApiAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
