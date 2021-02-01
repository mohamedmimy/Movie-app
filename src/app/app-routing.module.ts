import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviedetailsComponent} from 'src/app/componants/moviedetails/moviedetails.component';
import {HomeComponent} from 'src/app/componants/home/home.component';
import { RegisterComponent } from 'src/app/componants/register/register.component';
import { LoginComponent } from 'src/app/componants/login/login.component';
import { TrandingTvComponent } from './componants/tranding-tv/tranding-tv.component';
import { UpComingComponent } from 'src/app/componants/up-coming/up-coming.component';
import { AuthGuard } from './auth/auth.guard';

// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'home',canActivate:[AuthGuard] ,component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'moviedetails/:id', component: MoviedetailsComponent},
  {path: 'trending-tv',canActivate:[AuthGuard] ,component: TrandingTvComponent},
  {path: 'UpComing',canActivate:[AuthGuard] , component: UpComingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
