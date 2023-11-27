import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genres: Genre[] = [];
  dataLoaded = false;

  constructor(private genreService: GenreService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this.genreService.getGenres().subscribe(response => {
      this.genres = response.data;
      this.dataLoaded = true;
    });
  }
}
