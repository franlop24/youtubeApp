import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';
import { ApiKey } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl    = 'https://www.googleapis.com/youtube/v3/playlistItems';
  private apikey        = '';
  private playlist      = 'UUo3AxjxePfj6DHn03aiIhww';
  private nextPageToken = '';

  constructor(private http: HttpClient) {
    console.log('Ingresa a servicio');
    const apiClass = new ApiKey();
    this.apikey = apiClass.apikey;
  }
  
  getVideos(){
    const url = `${ this.youtubeUrl }`;
    const params = new HttpParams()
        .set('part', 'snippet')
        .set('maxResults', '10')
        .set('playlistId', this.playlist)
        .set('key', this.apikey)
        .set('pageToken', this.nextPageToken)

    return this.http.get<YoutubeResponse>(url, { params })
            .pipe(
              map(resp => {
                this.nextPageToken = resp.nextPageToken;
                return resp.items;
              }),

              map(items => items.map(video => video.snippet))
              
            )
  }
}
