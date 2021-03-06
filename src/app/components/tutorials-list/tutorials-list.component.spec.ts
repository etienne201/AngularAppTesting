import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorialsListComponent } from './tutorials-list.component'; 
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('TutorialsListComponent', () => {
  let component: TutorialsListComponent;
  let fixture: ComponentFixture<TutorialsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsListComponent ],
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
