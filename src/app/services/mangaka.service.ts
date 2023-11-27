import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MangakaResponseModel } from '../models/mangakaResponseModel';

@Injectable({
  providedIn: 'root'
})
export class MangakaService {

  apiUrl = "https://localhost:7059/api/mangakas/getall";

  constructor(private httpClient:HttpClient) { }

  getMangakas():Observable<MangakaResponseModel>{
    return this.httpClient.get<MangakaResponseModel>(this.apiUrl)
  }
}
