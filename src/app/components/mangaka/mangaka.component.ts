import { Component, OnInit } from '@angular/core';
import { Mangaka } from 'src/app/models/mangaka';
import { MangakaService } from 'src/app/services/mangaka.service';

@Component({
  selector: 'app-mangaka',
  templateUrl: './mangaka.component.html',
  styleUrls: ['./mangaka.component.css']
})
export class MangakaComponent implements OnInit {
  mangakas:Mangaka[] = [];
  dataLoaded = false;

  constructor(private mangakaService:MangakaService){}

  ngOnInit(): void {
    this.getMangakas();
  }

  getMangakas(){
    this.mangakaService.getMangakas().subscribe(response =>{
      this.mangakas = response.data;
      this.dataLoaded = true;
    })
  }
}
