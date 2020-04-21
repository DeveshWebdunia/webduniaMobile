import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videoData;
  constructor(private http : HttpClient ) { }

  ngOnInit(): void {
    const url = Constants.apiURL+"videos";
    this.http.get(url).subscribe(res =>{
      this.videoData = res;
      console.log(this.videoData);
    })
  }

}
