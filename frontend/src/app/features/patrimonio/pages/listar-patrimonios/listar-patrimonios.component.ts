import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PatrimonioFormComponent } from '../../components/patrimonio-form/patrimonio-form.component';
import { Patrimonio } from '../../models/patrimonio.model';
import { PatrimonioService } from '../../services/patrimonio.service';

@Component({
  selector: 'app-listar-patrimonios',
  standalone: false,
  templateUrl: './listar-patrimonios.component.html',
  styleUrls: ['./listar-patrimonios.component.css']
})
export class ListarPatrimoniosComponent implements OnInit {

  colunas: string[] = [
    'numero',
    'descricao',
    'status',
    'tipo',
    'acoes'
  ];

  dataSource = new MatTableDataSource<Patrimonio>();

  filtro = '';

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private patrimonioService: PatrimonioService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarPatrimonios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  carregarPatrimonios() {

    this.patrimonioService.listar()
      .subscribe({

        next: (dados) => {
          this.dataSource.data = dados;
        },

        error: (erro) => {
          console.error('Erro ao buscar patrimônios', erro);
        }

      });

  }
  abrirCadastro() {

  const dialogRef = this.dialog.open(PatrimonioFormComponent, {
    width: '500px'
  });

  dialogRef.afterClosed()
    .subscribe((salvou) => {

      if (salvou) {
        this.carregarPatrimonios();
      }

    });

}

  aplicarFiltro() {
    this.dataSource.filter = this.filtro.trim().toLowerCase();
  }
}