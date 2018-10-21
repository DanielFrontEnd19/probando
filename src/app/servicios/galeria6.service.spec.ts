import { TestBed, inject } from '@angular/core/testing';

import { Galeria6Service } from './galeria6.service';

describe('Galeria6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria6Service]
    });
  });

  it('should be created', inject([Galeria6Service], (service: Galeria6Service) => {
    expect(service).toBeTruthy();
  }));
});
