import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MinimisePipe } from './minimise.pipe';
import { HighlightDirective } from './highlight.directive';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BloglistComponent,
    PaginatorComponent,
    MinimisePipe,
    HighlightDirective,
    CardComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [MinimisePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
