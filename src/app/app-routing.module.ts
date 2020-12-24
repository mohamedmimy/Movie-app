import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviedetailsComponent} from 'src/app/componants/moviedetails/moviedetails.component';
import {HomeComponent} from 'src/app/componants/home/home.component';
import { RegisterComponent } from 'src/app/componants/register/register.component';
import { LoginComponent } from 'src/app/componants/login/login.component';
// import { AuthGuard } from './auth/auth.guard';
import { TrandingTvComponent } from './componants/tranding-tv/tranding-tv.component';

const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'moviedetails/:id', component: MoviedetailsComponent},
  {path: 'trending-tv', component: TrandingTvComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
