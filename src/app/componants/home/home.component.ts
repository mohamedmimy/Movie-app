import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MoviesService} from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  treandingMovies = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  // tslint:disable-next-line: variable-name
  constructor(public _MoviesService: MoviesService, public _Router: Router)
   {
     _MoviesService.getTrendingMovies().subscribe(
       (data) => {this.treandingMovies = data.results; },
       (err) => {console.log(err); }
       );
   }

  ngOnInit(): void {
  }

}
