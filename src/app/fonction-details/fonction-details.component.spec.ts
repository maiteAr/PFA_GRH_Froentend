import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonctionDetailsComponent } from './fonction-details.component';

describe('FonctionDetailsComponent', () => {
  let component: FonctionDetailsComponent;
  let fixture: ComponentFixture<FonctionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonctionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonctionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
