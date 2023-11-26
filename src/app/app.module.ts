import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaComponent } from './components/manga/manga.component';
import { GenreComponent } from './components/genre/genre.component';
import { MangakaComponent } from './components/mangaka/mangaka.component';
import { MangaDetailsComponent } from './components/manga-details/manga-details.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    GenreComponent,
    MangakaComponent,
    MangaDetailsComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
