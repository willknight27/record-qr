import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { PassResetPageRoutingModule } from './pass-reset-routing.module';
import { PassResetPageModule } from './pass-reset.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PassResetPage } from './pass-reset.page';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe(' TEST PassResetPage', () => {
  let component: PassResetPage;
  let fixture: ComponentFixture<PassResetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassResetPage ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        PassResetPageModule,
        PassResetPageRoutingModule,
        RouterModule,
        MaterialModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PassResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Pagina instanciada de forma correcta', () => {
    expect(component).toBeTruthy();
  });


  //Test de formulario invalido con un solo dato
  it('Formulario invalido',()=>{

    const fixture = TestBed.createComponent(PassResetPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const usuario = app.formularioReset.controls['user'];
    usuario.setValue('al.musabeli')

    // Probar que el formulario sea invalido si faltan datos
    expect(app.formularioReset.invalid).toBeTrue();
  });



  //Test de formulario valido con datos correctos
  it('Formulario valido',()=>{

    const fixture = TestBed.createComponent(PassResetPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let formulario = app.formularioReset
    let user = app.formularioReset.controls['user']
    let email = app.formularioReset.controls['email']

    user.setValue('al.musabeli')
    email.setValue('al.musabeli@gmail.com')

    //Probar que el formulario este valido
    expect(formulario.invalid).toBeFalse()

  })



  //Test de formulario invalido con email incorrecto
  it('Formulario invalido Email con formato incorrecto',()=>{

    const fixture = TestBed.createComponent(PassResetPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let formulario = app.formularioReset
    let user = app.formularioReset.controls['user']
    let email = app.formularioReset.controls['email']

    user.setValue('al.musabeli')
    email.setValue('al.musabeligmail.com')

    //Probar que el formulario este invalido
    expect(app.formularioReset.invalid).toBeTrue();

  });
});
