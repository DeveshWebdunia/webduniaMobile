import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navslider',
  templateUrl: './navslider.component.html',
  styleUrls: ['./navslider.component.css']
})
export class NavsliderComponent implements OnInit {
  languageData;
  NavmenuData;
  resdata;

  constructor(private http : HttpClient ) { }

  ngOnInit() {
    const url = "http://ws.webdunia.com/json/page?lang=hi&url=/home-page";
    this.http.get(url).subscribe(res =>{
      this.resdata = res;
      this.NavmenuData = this.resdata.Contents[1].Items;
      
     // console.log(this.NavmenuData);
    })
  }
  

}
