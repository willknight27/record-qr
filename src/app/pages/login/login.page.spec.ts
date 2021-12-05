import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TEST del componente LoginPage', () => {

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
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // Asegurar que el componente se instancie de forma correcta
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
