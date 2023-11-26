import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MangaResponseModel } from '../models/mangaResponseModel';


@Injectable({
  providedIn: 'root'
})
export class MangaService {

  apiUrl = "https://localhost:7059/api/mangas/getall";

  constructor(private httpClient:HttpClient) { }

  getMangas():Observable<MangaResponseModel>{
    return this.httpClient.get<MangaResponseModel>(this.apiUrl)
  }
}
