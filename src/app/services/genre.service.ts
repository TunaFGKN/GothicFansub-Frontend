import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreResponseModel } from '../models/genreResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl = "https://localhost:7059/api/genres/getall";

  constructor(private httpClient:HttpClient) { }

  getGenres():Observable<GenreResponseModel>{
    return this.httpClient.get<GenreResponseModel>(this.apiUrl);
  }
}
