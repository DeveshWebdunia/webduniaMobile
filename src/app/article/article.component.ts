import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from  '@angular/router'; 
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData;

  constructor(private http : HttpClient, private Route :ActivatedRoute ) { }
  ngOnInit() { 
   let urlSeg =  (this.Route.snapshot['_routerState'].url).split("/").pop();
    console.log(urlSeg);
    const url = "http://ws.webdunia.com/json/page?lang=hi&url=/"+urlSeg;

    this.http.get(url).subscribe(res =>{
      this.articleData = res;
      console.log(this.articleData);
    })
  }
}
