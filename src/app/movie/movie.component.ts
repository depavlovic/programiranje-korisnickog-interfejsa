import {MatCardModule} from '@angular/material/card';
import {ChangeDetectionStrategy,Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
   
  }


