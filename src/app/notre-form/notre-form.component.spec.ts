import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreFormComponent } from './notre-form.component';

describe('NotreFormComponent', () => {
  let component: NotreFormComponent;
  let fixture: ComponentFixture<NotreFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotreFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
