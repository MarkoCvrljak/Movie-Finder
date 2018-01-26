import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { MoviesComponent }  from './components/movies/movies.component';
import { MoviesService }  from './components/services/movies.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, MoviesComponent ],
  providers:    [ MoviesService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
