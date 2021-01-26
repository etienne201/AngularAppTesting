import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent',() => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
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
