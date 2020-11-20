import { NgModule } from '@angular/core';
import { SharedModule } from '@vapulus/shared';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
