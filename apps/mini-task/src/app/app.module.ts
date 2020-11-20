import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponentModule, AppComponent } from '@vapulus/core';

@NgModule({
  imports: [AppRoutingModule, AppComponentModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
