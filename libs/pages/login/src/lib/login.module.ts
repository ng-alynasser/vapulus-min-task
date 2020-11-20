import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '@vapulus/shared';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { FormComponent } from './components/form/form.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent, IllustrationComponent, FormComponent],
})
export class LoginModule {}
