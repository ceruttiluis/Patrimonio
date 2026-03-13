import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PatrimonioService } from '../../../patrimonio/services/patrimonio.service';
import { DepartamentoService } from '../../services/departamento.service';
import { FilialService } from '../../services/filial.service';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-transferencia-form',
  standalone: false,
  templateUrl: './transferencia-form.component.html'
})
export class TransferenciaFormComponent implements OnInit {

  form!: FormGroup;

  patrimonios: any[] = [];
  departamentos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private transferenciaService: TransferenciaService,
    private patrimonioService: PatrimonioService,
    private departamentoService: DepartamentoService,
    private filialService: FilialService,
    private cdr: ChangeDetectorRef,
    private dialogRef: MatDialogRef<TransferenciaFormComponent>
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      patrimonioId: ['', Validators.required],
      departamentoDestino: ['', Validators.required],
      filialNome: [''],
      observacoes: ['']
    });

    this.carregarDados();

  }

  carregarDados() {

    this.patrimonioService.listar()
      .subscribe(data => {
        this.patrimonios = data;
        this.cdr.detectChanges();
      });

    this.departamentoService.listar()
      .subscribe(data => {
        this.departamentos = data;
        this.cdr.detectChanges();
      });
  }
  onDepartamentoChange(departamento: any) {

    if (!departamento || !departamento.filial) return;

    this.form.patchValue({
      filialNome: departamento.filial.nome
    });

  }

  salvar() {

    if (this.form.invalid) return;

    const payload = {
      patrimonioId: this.form.value.patrimonioId,
      departamentoDestinoId: this.form.value.departamentoDestino.id,
      observacao: this.form.value.observacoes || null
    };

    console.log("ENVIANDO:", payload);

    this.transferenciaService.transferir(payload)
      .subscribe({
        next: () => {
          console.log("Transferência realizada");
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error("ERRO API:", err);
          console.error(err);
        }
      });

  }

}