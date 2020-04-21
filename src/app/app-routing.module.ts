import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
//{path : '' , component : AppComponent }, 
{path : 'videos', component : VideosComponent}, 
{path : 'photo-gallery', component : PhotoGalleryComponent},
{path : 'article/:id', component :  ArticleComponent },
//{path : '**', component : PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =  [
                                  ArticleComponent
                                  ]