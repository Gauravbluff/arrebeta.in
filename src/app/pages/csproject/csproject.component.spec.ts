import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsprojectComponent } from './csproject.component';

describe('CsprojectComponent', () => {
  let component: CsprojectComponent;
  let fixture: ComponentFixture<CsprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
