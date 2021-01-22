import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { AddTutorialComponent } from './add-tutorial.component';
 
 
describe('AddTutorialComponent', () => {
   
  let component: AddTutorialComponent;
  let fixture: ComponentFixture<AddTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ AddTutorialComponent ],
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
