import { Injectable } from '@angular/core';

import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Email } from '../Interfaces/asistencia-alumnos';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // Estructura del email
  email : Email = {

    to: '',
    cc:'',
    subject: 'REGISTERAPP: CABALLERO-MUSABELI',
    body: '',
    isHtml: false,
    app: 'gmail',

  }

  constructor(public emailComposer: EmailComposer) { }

  enviarEmail(data){
    this.emailComposer.open(data)
  }
  

}
