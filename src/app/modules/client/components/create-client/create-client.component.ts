import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../../interfaces/client.interface';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent {
  @Input() valuePhone = '';

  public client!: Client;
  public formClient!: FormGroup;
  public loading: boolean = false;

  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit() {
    sessionStorage.removeItem('dataClient');
    this.formClient = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }

  public get controlsClient(): { [key: string]: AbstractControl } {
    return this.formClient.controls;
  }

  public createClient() {
    this.loading = true;
    this.client = {
      name: this.controlsClient['name'].value,
      surname: this.controlsClient['surname'].value,
      phoneNumber: this.valuePhone,
    };
    this.clientService.createClient(this.client).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/home/invoice']);
      sessionStorage.setItem('dataClient', JSON.stringify(this.client));
    });
  }
}
