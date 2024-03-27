import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from 'src/app/pages/principal/container/contenedor.component';
import { HomeComponent } from 'src/app/pages/principal/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedorComponent,
    children: [
      { path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
