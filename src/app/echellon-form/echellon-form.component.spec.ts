import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchellonFormComponent } from './echellon-form.component';

describe('EchellonFormComponent', () => {
  let component: EchellonFormComponent;
  let fixture: ComponentFixture<EchellonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchellonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchellonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
