import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: Usuario[];

  constructor(private router: Router, 
              private alertCtrl: AlertController,
              private fb: FormBuilder,
              private api: ApiAsistenciaService) { }

  ngOnInit() {
  }

  formularioLogin = this.fb.group({
    // validacion de campo requerido y minimo de caracteres
    user: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]

  });

  //Alerta de Datos erroneos
  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Datos Incorrectos',
      message: 'Usuario y/o contraseña incorrectos',
      buttons: ['OK']
    });
    await alert.present();
  }

  onLogin() {
    
    this.api.getUsuarios().subscribe((data) => {
      console.log(data)
      this.usuarios = data;

      //Valida que usuario y contrasena ingresados son los correctos
      const usuario: Usuario = this.usuarios.find(
        usuario => usuario.nombreUsuario === this.formularioLogin.value.user
                && usuario.password === this.formularioLogin.value.password );
      
      //Usuario valido, redirecciona a Home
      if (usuario) {
        let navigationExtras: NavigationExtras = {
          state: {usuarioValido: usuario.nombre}
        }
        this.router.navigate(['/home'], navigationExtras)
      }
      else {
        this.presentAlert();
      } 
    });
    
    
    

  }

}
