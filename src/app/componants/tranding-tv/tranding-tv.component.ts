import { Component, OnInit } from '@angular/core';
import {MoviesService} from 'src/app/services/movies.service';

@Component({
  selector: 'app-tranding-tv',
  templateUrl: './tranding-tv.component.html',
  styleUrls: ['./tranding-tv.component.scss']
})
export class TrandingTvComponent implements OnInit {
  trendingTv = [];
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';

  // tslint:disable-next-line: variable-name
  constructor(public _MoviesService: MoviesService)
   {
    _MoviesService.getTrendingTv().subscribe(
      (data) => {this.trendingTv = data.results; },
      (err) => {console.log(err); }
      );
    }

  ngOnInit(): void {
  }

}
