import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service';
import { MatDialog } from '@angular/material/dialog';
import { TransferenciaFormComponent } from '../../components/transferencia/transferencia-form.component';
import { Transferencia } from '../../models/transferencia.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-transferencias',
  standalone: false,
  templateUrl: './listar-transferencias.component.html',
  styleUrl: './listar-transferencias.component.css',
})
export class ListarTransferenciaComponent implements OnInit {

  transferencias: any[] = [];

  displayedColumns = [
    'patrimonio',
    'departamento_origem',
    'departamento_destino',
    'filial_destino',
    'data'
  ];

  dataSource = new MatTableDataSource<Transferencia>();

  filtro = '';

  constructor(
    private service: TransferenciaService,
    private dialog: MatDialog,

    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.service.listar().subscribe(data => {
      this.transferencias = data;
      this.cdr.detectChanges();
    });
  }

  novaTransferencia() {

    const dialogRef = this.dialog.open(TransferenciaFormComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carregar();
      }
    });

  }
}
