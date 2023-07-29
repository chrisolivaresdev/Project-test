import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login',  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule), },
  { path: '', canActivate: [AuthGuard],  loadChildren: () => import('./user/user.module').then((m) => m.UserModule), },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
