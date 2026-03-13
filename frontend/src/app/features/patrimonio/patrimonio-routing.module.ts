import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPatrimoniosComponent } from './pages/listar-patrimonios/listar-patrimonios.component';

const routes: Routes = [
  {
    path: '',
    component: ListarPatrimoniosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimonioRoutingModule {}