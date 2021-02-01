import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componants/home/home.component';
import { MoviesComponent } from './componants/movies/movies.component';
import { MoviedetailsComponent } from './componants/moviedetails/moviedetails.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './componants/register/register.component';
import { LoginComponent } from './componants/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TrandingTvComponent } from './componants/tranding-tv/tranding-tv.component';
import { UpComingComponent } from '../app/componants/up-coming/up-coming.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviedetailsComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    TrandingTvComponent,
    UpComingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
