import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavsliderComponent } from './navslider/navslider.component';
import { HttpClient } from '@angular/common/http';
import { RotatorComponent } from './rotator/rotator.component';
import { ArticleComponent } from './article/article.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { Constants } from './constants';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavsliderComponent,
    RotatorComponent,
    ArticleComponent,
    routingComponents,
    PagenotfoundComponent,
    FooterComponent,
    PhotoGalleryComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ Constants ],
  bootstrap: [AppComponent
            ]
})
export class AppModule { }
