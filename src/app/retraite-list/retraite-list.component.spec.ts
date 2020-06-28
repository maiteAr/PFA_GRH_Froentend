import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraiteListComponent } from './retraite-list.component';

describe('RetraiteListComponent', () => {
  let component: RetraiteListComponent;
  let fixture: ComponentFixture<RetraiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
