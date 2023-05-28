import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { SearchClientComponent } from './components/search-client/search-client.component';

const routes: Routes = [
  {
    path: 'list',
    title: 'Listado de clientes',
    component: ListClientComponent
  },
  {
    path: 'create',
    title: 'Crear cliente',
    component: CreateClientComponent
  },
  {
    path: 'search',
    title: 'Buscar cliente',
    component: SearchClientComponent
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }