import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreenService } from './services/splash-screen.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
  ],
})
export class CoreModule {
  public constructor(
    private readonly splashScreenService: SplashScreenService
  ) {}
}
