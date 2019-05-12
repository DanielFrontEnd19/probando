import { TestBed, inject } from '@angular/core/testing';

import { Galeria8Service } from './galeria8.service';

describe('Galeria8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria8Service]
    });
  });

  it('should be created', inject([Galeria8Service], (service: Galeria8Service) => {
    expect(service).toBeTruthy();
  }));
});
