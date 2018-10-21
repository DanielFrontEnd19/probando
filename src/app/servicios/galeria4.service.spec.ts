import { TestBed, inject } from '@angular/core/testing';

import { Galeria4Service } from './galeria4.service';

describe('Galeria4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria4Service]
    });
  });

  it('should be created', inject([Galeria4Service], (service: Galeria4Service) => {
    expect(service).toBeTruthy();
  }));
});
