import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  moduleId: module.id,  
  selector: 'movies',
  templateUrl: 'movies.component.html',
  providers: [ MoviesService ]
})
export class MoviesComponent  { 
    popularMovies: Array<Object>;
    searchStr:string;
    searchRes: Array<Object>;
    
    constructor(private moviesService: MoviesService){
        this.moviesService.getPopular().subscribe(res => {
            this.popularMovies = res.results;
        })
    }

    searchMovies(){
        this.moviesService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
            
        });
        console.log(this.searchRes)
    }
 }
