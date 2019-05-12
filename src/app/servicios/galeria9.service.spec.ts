import { TestBed, inject } from '@angular/core/testing';

import { Galeria9Service } from './galeria9.service';

describe('Galeria9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Galeria9Service]
    });
  });

  it('should be created', inject([Galeria9Service], (service: Galeria9Service) => {
    expect(service).toBeTruthy();
  }));
});
