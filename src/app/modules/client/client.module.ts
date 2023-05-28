import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    CreateClientComponent,
    ListClientComponent,
    SearchClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ClientService
  ]
})
export class ClientModule { }
