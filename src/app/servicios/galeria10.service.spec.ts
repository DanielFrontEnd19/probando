import { TestBed, inject } from '@angular/core/testing';

import { Galeria10Service } from './galeria10.service';

describe('Galeria10Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria10Service]
    });
  });

  it('should be created', inject([Galeria10Service], (service: Galeria10Service) => {
    expect(service).toBeTruthy();
  }));
});
