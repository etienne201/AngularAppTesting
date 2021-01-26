import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent',() => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
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
