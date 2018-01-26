import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService{
    apiKey:string;
    searchStr:string;
    movieName = "https://api.themoviedb.org/3/search/movie?api_key="
    
    constructor(private http:Http){
        this.apiKey = 'ae56d736d615cdd0ba87516da9dc0134';
        console.log('service is running...');
    }

    getPopular(){
        return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1')
        .map(res => res.json());
    }

    searchMovies(searchStr:string){
        let url;
        url = `${this.movieName}${this.apiKey}&query=${searchStr}`;
        return this.http.get(url)
        .map(res => res.json());
    }

}