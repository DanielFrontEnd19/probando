import { TestBed, inject } from '@angular/core/testing';

import { Galeria2Service } from './galeria2.service';

describe('Galeria2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria2Service]
    });
  });

  it('should be created', inject([Galeria2Service], (service: Galeria2Service) => {
    expect(service).toBeTruthy();
  }));
});
