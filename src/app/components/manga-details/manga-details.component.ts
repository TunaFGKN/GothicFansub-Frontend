import { Component, OnInit } from '@angular/core';
import { MangaDetails } from 'src/app/models/mangaDetails';
import { MangaDetailsService } from 'src/app/services/manga-details.service';

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.css']
})
export class MangaDetailsComponent implements OnInit{
  mangaDetails:MangaDetails[] = [];
  dataLoaded = false;

  constructor(private mangaDetailsService:MangaDetailsService){}

  ngOnInit(): void {
    this.getMangaDetails();
  }

  getMangaDetails(){
    this.mangaDetailsService.getMangaDetails().subscribe(response =>{
      this.mangaDetails = response.data;
      this.dataLoaded = true;
    })
  }
}
