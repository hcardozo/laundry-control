import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public formLogin: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public patternEmail: RegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  public constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  public ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required,
          Validators.pattern(this.patternEmail),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  public get formData(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  public login() {
    this.authService.login(this.formData['email'].value, this.formData['password'].value);
  }
}
