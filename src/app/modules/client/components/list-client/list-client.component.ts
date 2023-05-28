import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/modules/shared/interfaces/column.interface';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/client.interface';
import { Page } from 'src/app/modules/shared/interfaces/page.interface';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  public columns: Column[] = [
    {
      key: 'name',
      value: 'Nombres',
    },
    {
      key: 'surname',
      value: 'Apellidos',
    },
    {
      key: 'phoneNumber',
      value: 'Teléfono',
    }
  ]

  public clients: Client[] = [
    {      name: 'Harold',      surname: 'Cardozo',      phoneNumber: '31254060686'    },
    {      name: 'Camilo',      surname: 'Linares',      phoneNumber: '31054698798'    },
    {      name: 'Julian',      surname: 'Cedeño',      phoneNumber: '31965498498'    },
    {      name: 'Andres',      surname: 'Lopez',      phoneNumber: '30058999648'    }
  ];

  public page: Page = {
    size: 5,
    totalElements: 0,
    totalPages: 0,
    number: 0
  };

  public constructor(private clientService: ClientService) { }

  public ngOnInit(): void {
    this.getClients()
  }


  public onPageChange(page: number) {
    this.page.number = page;
    this.getClients();
  }

  public onSizeChange(size: number) {
    this.page.size = size;
    this.getClients();
  }

  private getClients() {
    this.clientService.getClients(this.page).subscribe((response) => {
      this.clients = response._embedded.clients;
      this.page = response.page;
    })
  }
}
