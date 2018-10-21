import { TestBed, inject } from '@angular/core/testing';

import { Galeria3Service } from './galeria3.service';

describe('Galeria3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria3Service]
    });
  });

  it('should be created', inject([Galeria3Service], (service: Galeria3Service) => {
    expect(service).toBeTruthy();
  }));
});
