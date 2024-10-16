import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Movie } from './movie.model';
import { MovieListService } from '../movie-list.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,HttpClientModule,NgFor],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  
  movies: Movie[] = [];
 

  constructor(private movieListService : MovieListService){
    
  }


  
  
  
  
  ngOnInit(): void {
    this.movies = this.movieListService.getMovies();
  }
      
  
  }


