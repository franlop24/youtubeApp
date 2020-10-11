import { Component } from '@angular/core';
import { Video } from 'src/app/models/youtube.models';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css'
  ]
})
export class HomeComponent {

  videos: Video[] = [];
  constructor(private youtube: YoutubeService) { 
    this.youtube.getVideos().subscribe(data => {
      this.videos.push(...data);
      console.log(data);
    })
  }

  
}
