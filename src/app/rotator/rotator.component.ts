import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.css']
})
export class RotatorComponent implements OnInit {

  languageData;
  rotatorData;
  resdata;

  constructor(private http : HttpClient ) { }

  ngOnInit() {
    const url = "http://ws.webdunia.com/json/page?lang=hi&url=/home-page";
    this.http.get(url).subscribe(res =>{
      this.resdata = res;
      this.rotatorData = this.resdata.Contents[2].Items;
      
     // console.log(this.rotatorData);
    })
  }

}
