import { TestBed, inject } from '@angular/core/testing';

import { Galeria7Service } from './galeria7.service';

describe('Galeria7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria7Service]
    });
  });

  it('should be created', inject([Galeria7Service], (service: Galeria7Service) => {
    expect(service).toBeTruthy();
  }));
});
