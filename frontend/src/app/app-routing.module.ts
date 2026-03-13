import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'transferencias',
        loadChildren: () =>
          import('./features/transferencia/transferencia.module')
            .then(m => m.TransferenciaModule)
      },

      {
        path: 'patrimonios',
        loadChildren: () =>
          import('./features/patrimonio/patrimonio.module')
            .then(m => m.PatrimonioModule)
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
