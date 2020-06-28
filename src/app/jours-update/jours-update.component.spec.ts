import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursUpdateComponent } from './jours-update.component';

describe('JoursUpdateComponent', () => {
  let component: JoursUpdateComponent;
  let fixture: ComponentFixture<JoursUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoursUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoursUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
