import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core'

import { TutorialDetailsComponent } from './tutorial-details.component';
 
 
describe('TutorialDetailsComponent', () => {
  
  let component: TutorialDetailsComponent;
  let fixture: ComponentFixture<TutorialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailsComponent ],
       schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
    })
    .compileComponents();
  }));

   

  it.only('should create', () => {
    expect(component).not.toBeTruthy();
  });
});
