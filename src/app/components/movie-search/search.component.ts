import {Component, OnInit} from '@angular/core';
import {MovieService} from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieService) {
  }

  public movies: any;
  public searchInputValue: any;

  ngOnInit(): void {
  }

  public searchMovies(searchInputValue: any) {
    return this.movieService
      .getMoviesByQuery(searchInputValue)
      .subscribe((response) => {
        this.movies = response;
      });
  }

}
