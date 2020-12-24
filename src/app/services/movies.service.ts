import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // tslint:disable-next-line: variable-name
  constructor(public _HttpClient: HttpClient) { }
  getTrendingMovies(): Observable<any> // To get api trending movies
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=df2c9d374981a8a4a109421390d27420');
  }
  getTrendingTv(): Observable<any> // To get api trending Tv
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=df2c9d374981a8a4a109421390d27420');
  }
  getMovieDetails(id): Observable<any> // To get api MovieDetails
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=df2c9d374981a8a4a109421390d27420&language=en-US`);
  }
}

// tslint:disable-next-line: no-unused-expression

