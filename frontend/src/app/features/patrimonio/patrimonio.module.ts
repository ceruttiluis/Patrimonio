import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { PatrimonioRoutingModule } from './patrimonio-routing.module';

import { ListarPatrimoniosComponent } from './pages/listar-patrimonios/listar-patrimonios.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { PatrimonioFormComponent } from './components/patrimonio-form/patrimonio-form.component';

@NgModule({
  declarations: [ListarPatrimoniosComponent, PatrimonioFormComponent],
  imports: [
    CommonModule,
    PatrimonioRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
})
export class PatrimonioModule { }
