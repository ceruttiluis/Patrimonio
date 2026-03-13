import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { TransferenciaRoutingModule } from './transferencia-routing.module';
import { TransferenciaFormComponent } from './components/transferencia/transferencia-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ListarTransferenciaComponent } from './pages/listar-transferencias/listar-transferencias.component';

@NgModule({
  declarations: [ TransferenciaFormComponent, ListarTransferenciaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TransferenciaRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
})
export class TransferenciaModule {}
