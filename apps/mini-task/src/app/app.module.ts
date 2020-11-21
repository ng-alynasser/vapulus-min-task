import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppComponentModule } from '@vapulus/core';

@NgModule({
  imports: [AppRoutingModule, AppComponentModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
