import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router'

import { FoodsService } from "./services/foods.service";
import { AppComponent } from './app.component';
import { FoodsPageComponent } from './pages/foods-page/foods-page.component';
import { DetailsComponent } from './pages/details/details.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes = [
  { path: 'foods', component: FoodsPageComponent },
  { path: 'foods/:id', component: DetailsComponent },
  { path: 'ingredients', component: IngredientsComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    FoodsPageComponent,
    DetailsComponent,
    IngredientsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
