import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimonioFormComponent } from './patrimonio-form.component';

describe('PatrimonioForm', () => {
  let component: PatrimonioFormComponent;
  let fixture: ComponentFixture<PatrimonioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatrimonioFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatrimonioFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
