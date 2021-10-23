import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  formularioLogin = this.fb.group({
    // validacion de campo requerido y minimo de caracteres
    user: ['', [Validators.required, Validators.minLength(5)] ],
    password: ['',[Validators.required, Validators.minLength(5)]]

  });

  onLogin(){

  }

}
