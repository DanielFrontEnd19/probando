import { TestBed, inject } from '@angular/core/testing';

import { Galeria5Service } from './galeria5.service';

describe('Galeria5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria5Service]
    });
  });

  it('should be created', inject([Galeria5Service], (service: Galeria5Service) => {
    expect(service).toBeTruthy();
  }));
});
