import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private http : HttpClient, private Constants : Constants ) { }
  FooterData;
  ResData; 
  ngOnInit(): void {
   const url = Constants.apiURL+'home-page';
   this.http.get(url).subscribe(res =>{
     this.ResData = res;
     this.FooterData = this.ResData.Contents[22].Items;
     //console.log("FooterComponent -> ngOnInit ->  this.FooterData",  this.FooterData)
    
   })

  }

}
