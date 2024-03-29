import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppPageComponent } from './app-page/app-page.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { ListBlogsServices } from './services/listblog.services';
import { ListSearchComponent } from './list-search/list-search.component';
import { ChitetComponent } from './chitet/chitet.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMenuComponent,
    ListBlogsComponent,
    ListSearchComponent,
    ChitetComponent,
    EditBlogComponent,
    NewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    ListBlogsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
