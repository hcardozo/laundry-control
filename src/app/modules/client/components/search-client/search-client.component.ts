import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss'],
})
export class SearchClientComponent implements OnInit {
  public formSearchClient!: FormGroup;
  public dataClient: any;
  public viewCreateClient: boolean = false;
  public phoneNumber: string = '';
  public loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.formSearchClient = this.formBuilder.group({
      phone: [
        '',
        [
          Validators.minLength(7),
          Validators.maxLength(10),
          Validators.required,
        ],
      ],
    });
  }

  public get formDataClient(): { [key: string]: AbstractControl } {
    return this.formSearchClient.controls;
  }

  public findByPhoneNumber() {
    this.phoneNumber = this.formDataClient['phone'].value;
    this.loading = true;
    this.clientService.findByPhoneNumber(this.phoneNumber).subscribe(
      (response) => {
        this.dataClient = response;
        this.loading = false;
        this.viewCreateClient = false;
        this.router.navigate(['/home/invoice']);
        sessionStorage.setItem('dataClient', JSON.stringify(this.dataClient));
        
      },
      (err) => {
        this.loading = false;
        if ((err.status = 404)) {
          this.viewCreateClient = true;
          return;
        }
      }
    );
  }
}
