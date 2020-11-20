import { SharedModule } from '@vapulus/shared';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';

@NgModule({
  imports: [SharedModule, CoreModule],
  declarations: [AppComponent],
  exports: [AppComponent],
})
export class AppComponentModule {}
