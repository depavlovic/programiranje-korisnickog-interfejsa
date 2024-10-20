import { Injectable } from '@angular/core';
import { Movie } from './movie/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  private movies: Movie[] = [
    {
      title: 'John Wick 4',
      description: 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes',
      genre: 'Action/Thriller',
      duration: '169 min',
      director: 'Chad Stahelski',
      cast: ['Keanu Reeves', 'Laurence Fishburne', 'George Georgiou'],
      releaseDate: '2023-03-24',
      ticketPrice: 600,
      rating: []
    },
    {
      title: 'Interstellar',
      description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      genre: 'Adventure/Thriller',
      duration: '169 min',
      director: 'Christopher Nolan',
      cast: ['MatthewMcConaughey', 'Anne Hathaway'],
      releaseDate: '2014-11-05',
      ticketPrice: 700,
      rating: []
    },
    {
      title: 'Deadpool & Wolverine',
      description: 'Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.',
      genre: 'Action',
      duration: '140 min',
      director: 'Shawn Levy',
      cast: ['Ryan Reynolds', 'Emma Corrin', 'Hugh Jackman'],
      releaseDate: '2024-06-25',
      ticketPrice: 550,
      rating: []
    },
    {
      title: 'Venom: The Last Dance',
      description: 'Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie',
      genre: 'Sci-fi',
      duration: '130 min',
      director: 'Kelly Marcel',
      cast: ['Tom Hardy', 'Juno Temple'],
      releaseDate: '2024-10-25',
      ticketPrice: 650,
      rating: []
    },
    {
      title: 'Fast X',
      description: 'Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.',
      genre: 'Action/Drama',
      duration: '115 min',
      director: 'Louis Letterier',
      cast: ['Vin Diesel', 'Michelle Rodriguez', 'Jason Statham'],
      releaseDate: '2023-03-19',
      ticketPrice: 600,
      rating: []
    },
    {
      title: 'Shutter Island',
      description: 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
      genre: 'Mystery/Thriller',
      duration: '138 min',
      director: 'Martin Scorsese',
      cast: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo'],
      releaseDate: '2010-03-11',
      ticketPrice: 700,
      rating: []
    },
    {
      title: 'The Prestige',
      description: 'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
      genre: 'Thriller',
      duration: '130 min',
      director: 'Christopher Nolan',
      cast: ['Christian Bale', 'Hugh Jackman'],
      releaseDate: '2006-11-02',
      ticketPrice: 400,
      rating: []
    },
    {
      title: '1917',
      description: 'April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
      genre: 'War',
      duration: '120 min',
      director: 'Sam Mendes',
      cast: ['Dean-Charles Chapman', 'George MacKay'],
      releaseDate: '2029-12-25',
      ticketPrice: 600,
      rating: []
    },
    {
      title: 'The Revenant',
      description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
      genre: 'Drama/Adventure',
      duration: '156 min',
      director: 'Alejandro G. Iñárritu',
      cast: ['LeonardoDiCaprio', 'Tom Hardy'],
      releaseDate: '2016-01-21',
      ticketPrice: 750,
      rating: []
    },
    {
      title: 'Once Upon a Time... in Hollywood',
      description: 'As Hollywoods Golden Age is winding down during the summer of 1969, television actor Rick Dalton and his stunt double Cliff Booth endeavor to achieve lasting success in Hollywood while meeting several colorful characters along the way',
      genre: 'Action/Drama',
      duration: '162 min',
      director: 'Quentin Tarantino',
      cast: ['LeonardoDiCaprio', 'Brad Pitt', 'Margot Robbie'],
      releaseDate: '2019-07-26',
      ticketPrice: 800,
      rating: []
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }
}
