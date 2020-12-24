import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  id: any;
  moveDetailes: any;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  topTen: any = [];
  // tslint:disable-next-line: no-inferrable-types
  isLoadeing: boolean = false;

  // tslint:disable-next-line: variable-name
  constructor(public _ActivatedRoute: ActivatedRoute , public _MoviesService: MoviesService)
   {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesService.getMovieDetails(this.id).subscribe(
      data => {
        this.moveDetailes = data;
        this.isLoadeing = true;
      }
      );

    _MoviesService.getTrendingMovies().subscribe(movies => {
        for ( let i = 0; i < 10 ; i++)
        {
          this.topTen.push(movies.results[i]);
        }
      });
   }

  ngOnInit(): void {
  }

}
