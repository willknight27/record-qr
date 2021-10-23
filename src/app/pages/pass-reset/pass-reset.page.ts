import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.page.html',
  styleUrls: ['./pass-reset.page.scss'],
})
export class PassResetPage implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  //EXPRESION REGULAR EMAIL
  private patron = /\S+@\S+\.\S+/;

  // Formulario Rectivo Pass-reset
  formularioReset = this.fb.group({

    user: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(this.patron)]]
  });




  onResetPassword(){
    console.log(this.formularioReset.value)
  }

}
