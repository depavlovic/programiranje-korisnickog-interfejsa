import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgFor } from '@angular/common';
import { Movie } from '../movie/movie.model';
import { MovieListService } from '../movie-list.service';



@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule,MatCardModule,MatButtonModule,MatInputModule,MatSelectModule,NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[]=[];
  
  searchTerm: string = '';

  constructor(private movieListService: MovieListService) {} 

  ngOnInit(): void {
    this.movies = this.movieListService.getMovies(); 
    this.filteredMovies = this.movies;
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(term) ||
      movie.genre.toLowerCase().includes(term) ||
      movie.cast.some(actor => actor.toLowerCase().includes(term))
    );
  }

}
