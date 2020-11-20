import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@vapulus/pages/home').then((m) => m.HomeModule),
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@vapulus/pages/login').then((m) => m.LoginModule),
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
