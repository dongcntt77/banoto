import { ChitietComponent } from './chitiet/chitiet.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {
    path: 'chitiet',
    component: ChitietComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ChitietComponent,
    MainComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
