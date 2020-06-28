import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFonctionComponent } from './create-fonction.component';

describe('CreateFonctionComponent', () => {
  let component: CreateFonctionComponent;
  let fixture: ComponentFixture<CreateFonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
