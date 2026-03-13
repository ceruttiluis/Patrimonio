import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransferenciaComponent } from './listar-transferencias.component';

describe('ListarTransferenciaComponent', () => {
  let component: ListarTransferenciaComponent;
  let fixture: ComponentFixture<ListarTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTransferenciaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarTransferenciaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
