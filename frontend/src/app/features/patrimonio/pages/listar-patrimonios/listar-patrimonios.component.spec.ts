import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPatrimoniosComponent } from './listar-patrimonios.component';

describe('ListarPatrimonios', () => {
  let component: ListarPatrimoniosComponent;
  let fixture: ComponentFixture<ListarPatrimoniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPatrimoniosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPatrimoniosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
