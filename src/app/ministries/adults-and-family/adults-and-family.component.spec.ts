import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultsAndFamilyComponent } from './adults-and-family.component';

describe('AdultsAndFamilyComponent', () => {
  let component: AdultsAndFamilyComponent;
  let fixture: ComponentFixture<AdultsAndFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdultsAndFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultsAndFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
