import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.page.html',
  styleUrls: ['./pass-reset.page.scss'],
})
export class PassResetPage implements OnInit {

  usuarios: Usuario[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private api: ApiAsistenciaService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  //EXPRESION REGULAR EMAIL
  private patron = /\S+@\S+\.\S+/;

  // Formulario Rectivo Pass-reset
  formularioReset = this.fb.group({

    user: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(this.patron)]]
  });


  async presentAlertOK(){
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Contraseña Recuperada',
      message: 'Se ha enviado una nueva contraseña a su correo. Presione OK para continuar.',
      buttons: [{
        text: 'OK',
        //Handler: se ejecutará la función cuando se presione el botón OK de la alerta.
        handler: ()=>{
          this.router.navigate(['/login'])
        }
      }]
    });
    await alert.present();
  }


  async presentAlertError() {
    const alert = await this.alertCtrl.create({
      
      header: 'Datos Incorrectos',
      message: "Usuario y/o correo incorrecto",
      buttons: ['OK']
    });

    await alert.present();
  }



  onResetPassword(){
    
    this.api.getUsuarios().subscribe((data)=>{
      this.usuarios = data;

      const usuario: Usuario = this.usuarios.find(
        usuario => usuario.nombreUsuario === this.formularioReset.value.user
                && usuario.email === this.formularioReset.value.email);
      
      if (usuario) {
        this.presentAlertOK()
      }
      else{
        this.presentAlertError()
      }
    })
  }

}
