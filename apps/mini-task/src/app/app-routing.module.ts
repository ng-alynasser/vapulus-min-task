import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LoginGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@vapulus/pages/home').then((m) => m.HomeModule),
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@vapulus/pages/login').then((m) => m.LoginModule),
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    loadChildren: () => import('@vapulus/pages/home').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
