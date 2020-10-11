import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor(private youtube: YoutubeService) { 
    this.youtube.getVideos().subscribe(data => {
      console.log(data);
    })
  }

  
}
