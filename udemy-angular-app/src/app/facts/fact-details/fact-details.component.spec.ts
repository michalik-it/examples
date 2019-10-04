import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactDetailsComponent } from './fact-details.component';

describe('FactDetailsComponent', () => {
  let component: FactDetailsComponent;
  let fixture: ComponentFixture<FactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
