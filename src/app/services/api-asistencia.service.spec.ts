import { TestBed } from '@angular/core/testing';

import { ApiAsistenciaService } from './api-asistencia.service';

describe('ApiAsistenciaService', () => {
  let service: ApiAsistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAsistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
