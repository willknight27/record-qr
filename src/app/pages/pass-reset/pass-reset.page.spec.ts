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

describe('PassResetPage', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
