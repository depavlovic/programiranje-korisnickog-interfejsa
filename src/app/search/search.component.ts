import { Component , OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgFor, NgIf } from '@angular/common';
import { Movie } from '../movie/movie.model';
import { MovieListService } from '../movie-list.service';
import { FormsModule } from '@angular/forms'







@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule,MatCardModule,MatButtonModule,MatInputModule,MatSelectModule,NgFor,FormsModule,NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[]=[];
  searchResults: Movie[] = []

  searchCriteria = {
    title: '',
    genre: '',
    actors: '',
    duration: '',
    ticketPrice: ''
  };
  
  

  constructor(private movieListService: MovieListService) {} 



  ngOnInit(): void {
    this.movies = this.movieListService.getMovies(); 
    this.filteredMovies = this.movies;
  }

  doSearch() {
    const { title, genre, actors, duration, ticketPrice } = this.searchCriteria;

    this.searchResults = this.filteredMovies.filter(movie => {

      return (!title || movie.title.toLowerCase().includes(title.toLowerCase())) &&
             (!genre || movie.genre.toLowerCase() === genre.toLowerCase()) &&
             (!actors || movie.cast.join(',').toLowerCase().includes(actors.toLowerCase())) &&
             (!duration || movie.duration === duration) &&
             (!ticketPrice || movie.ticketPrice.toString() === ticketPrice);
    });
    const resultTitles = this.searchResults.map(movie => movie.title).join(', ');
    //@ts-ignore
    Swal.fire({
      title: 'Search Complete!',
      text: `Found ${this.searchResults.length} result(s): ${resultTitles}`,
      icon: 'info',
      confirmButtonText: 'OK',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      timer: 5000, // automatski zatvori nakon 5 sekundi
      timerProgressBar: true,
      willClose: () => {
      //@ts-ignore
        Swal.fire({
          title: 'Thank You!',
          text: 'Feel free to search again.',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
      }
    });
}

}
