import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoursListComponent } from './jours-list.component';

describe('JoursListComponent', () => {
  let component: JoursListComponent;
  let fixture: ComponentFixture<JoursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
