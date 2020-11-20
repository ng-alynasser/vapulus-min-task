import { Inject, Injectable } from '@angular/core';
import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SplashScreenService {
  splashScreenEl: any;
  player: AnimationPlayer;

  constructor(
    private readonly animationBuilder: AnimationBuilder,
    private readonly router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.splashScreenEl = this.document.body.querySelector('#splash-screen');
    if (this.splashScreenEl) {
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          take(1)
        )
        .subscribe(() => setTimeout(() => this.hide()));
    }
  }

  hide(): void {
    this.player = this.animationBuilder
      .build([
        style({ opacity: '1' }),
        animate(
          '800ms ease-in',
          style({
            opacity: '0',
            zIndex: '-10',
          })
        ),
      ])
      .create(this.splashScreenEl);

    setTimeout(() => this.player.play(), 0);
  }
}
