import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  public getMoviesByQuery(queryString: string) {
    return this.http.get<any>(`${env.apiUrl}/search/movie?api_key=${env.apiKey}&language=en_US&query=${queryString}&page=1&include_adult=false`, {
      'headers': new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://ynov-m2-tp-cinema.herokuapp.com/',
      })
    });
  }

}
