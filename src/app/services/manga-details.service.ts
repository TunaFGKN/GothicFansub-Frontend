import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MangaDetailsResponseModel } from '../models/mangaDetailsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MangaDetailsService {

  apiUrl = "https://localhost:7059/api/mangas/getmangadetails";

  constructor(private httpClient:HttpClient) { }

  getMangaDetails():Observable<MangaDetailsResponseModel>{
    return this.httpClient.get<MangaDetailsResponseModel>(this.apiUrl);
  }
}
