import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { PatrimonioService } from '../../services/patrimonio.service';
import { normalizarTexto } from '../../../../shared/utils/string-utils';

@Component({
  selector: 'app-patrimonio-form',
  standalone: false,
  templateUrl: './patrimonio-form.component.html',
  styleUrls: ['./patrimonio-form.component.css']
})
export class PatrimonioFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patrimonioService: PatrimonioService,
    private dialogRef: MatDialogRef<PatrimonioFormComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      numero: ['', Validators.required],
      descricao: ['', Validators.required],
      tipo: ['', Validators.required],
      status: ['ATIVO', Validators.required],
      departamentoId: ['', Validators.required],
      filialId: ['', Validators.required]
    });
  }

  formatarCampo(campo: string) {
  const valor = this.form.get(campo)?.value;

  if (valor) {
    this.form.get(campo)?.setValue(
      normalizarTexto(valor),
      { emitEvent: false }
    );
  }
}

  salvar() {
    if (this.form.invalid) {
      return;
    }

    this.patrimonioService.criar(this.form.value).subscribe({
      next: () => this.dialogRef.close(true),
      error: err => console.error(err)
    });
  }
}