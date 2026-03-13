import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTransferenciaComponent } from './pages/listar-transferencias/listar-transferencias.component';

const routes: Routes = [

  {
    path: '',
    component: ListarTransferenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaRoutingModule {}
