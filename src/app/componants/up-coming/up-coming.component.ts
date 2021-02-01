import { Component, OnInit } from '@angular/core';
import {MoviesService} from 'src/app/services/movies.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.scss']
})
export class UpComingComponent implements OnInit {
  UpComing = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  p: number = 1;
  collection: any[];
  constructor(public _MoviesService: MoviesService)
  {
    _MoviesService.getUpComingMovies().subscribe(
      (data) => {this.UpComing = data.results; },
      (err) => {console.log(err); }
      );
  }

  ngOnInit(): void {
  }

}
