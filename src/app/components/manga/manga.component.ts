import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/models/manga';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
    mangas:Manga[] = [];
    dataLoaded = false;

    constructor(private mangaService:MangaService){}

    ngOnInit(): void {
      this.getMangas();
    }

    getMangas(){
      this.mangaService.getMangas().subscribe(response=>{
        this.mangas = response.data;
        this.dataLoaded = true;
      })
    }
}
