import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
photoGalleryData
  constructor(private http : HttpClient 
    ) { }

  ngOnInit(): void {

    const url = Constants.apiURL+"photo-gallery";
    this.http.get(url).subscribe(res =>{
      this.photoGalleryData = res;
      console.log(this.photoGalleryData);
    })
  }   
  }


