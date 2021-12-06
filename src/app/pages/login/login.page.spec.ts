import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('TEST LoginPage', () => {

  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  
  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({

      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
  
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // Asegurar que el componente se instancie de forma correcta
  it('Pagina instanciada de forma correcta', () => {
    expect(component).toBeTruthy();
  });


  //Test de formulario invalido
  it('Formulario invalido',()=>{

    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const usuario = app.formularioLogin.controls['user'];
    usuario.setValue('al.musabeli')

    // Probar que el formulario sea invalido si faltan datos
    expect(app.formularioLogin.invalid).toBeTrue();
  });

  //Test de formulario valido
  it('Formulario valido',()=>{

    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let formulario = app.formularioLogin
    let user = app.formularioLogin.controls['user']
    let password = app.formularioLogin.controls['password']

    user.setValue('al.musabeli')
    password.setValue('duoc07')

    //Probar que el formulario este valido
    expect(formulario.invalid).toBeFalse()

  })


  //Test de  redireccion
  /* it('Redireccion',()=>{

    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();


    let location: Location
    let router: Router
    let formulario = app.formularioLogin
    let user = app.formularioLogin.controls['user']
    let password = app.formularioLogin.controls['password']

    user.setValue('al.musabeli')
    password.setValue('duoc07')
    const botonIngresar = fixture.debugElement.query(By.css('button.boton-login'))
    botonIngresar.nativeElement.click()

    //Probar que el formulario este valido
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']) 

  })*/
});
