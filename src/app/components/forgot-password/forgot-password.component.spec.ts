import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { ForgotPasswordComponent } from './forgot-password.component';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      schemas: [
       CUSTOM_ELEMENTS_SCHEMA,
       NO_ERRORS_SCHEMA
   ]
    })
    .compileComponents();
  }));
 

  it('should create', () => {
    expect(component).not.toBeTruthy();
  });
});
