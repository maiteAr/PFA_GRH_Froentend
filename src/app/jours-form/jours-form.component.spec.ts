import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursFormComponent } from './jours-form.component';

describe('JoursFormComponent', () => {
  let component: JoursFormComponent;
  let fixture: ComponentFixture<JoursFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoursFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
