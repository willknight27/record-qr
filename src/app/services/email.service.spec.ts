import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[],
      imports:[],
      providers:[
        EmailComposer
      ]
    });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
