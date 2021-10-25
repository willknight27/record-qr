import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Interfaces/asistencia-alumnos';
import { ApiAsistenciaService } from 'src/app/services/api-asistencia.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios: Usuario[];

  constructor(private fb: FormBuilder, private api: ApiAsistenciaService) { }

  ngOnInit() {
  }

  formularioLogin = this.fb.group({
    // validacion de campo requerido y minimo de caracteres
    user: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]]

  });

  onLogin() {
    console.log(this.formularioLogin.value.user);

    this.api.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      const usuario: Usuario = this.usuarios.find(usuario => usuario.username === this.formularioLogin.value.user)
      console.log(usuario)
    });

  }

}
