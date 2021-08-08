import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EceProjectComponent } from './ece-project.component';

describe('EceProjectComponent', () => {
  let component: EceProjectComponent;
  let fixture: ComponentFixture<EceProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EceProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
