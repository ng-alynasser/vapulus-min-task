import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@vapulus/core';

@Component({
  selector: 'vapulus-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  @HostBinding('class.login__form') loginFormClass = true;
  loginForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['ng.alynasser@gmail.com', Validators.required],
      password: ['0123456789', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login();
      this.router.navigate(['/']);
    }
  }
}
