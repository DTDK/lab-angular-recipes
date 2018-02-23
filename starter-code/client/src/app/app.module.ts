import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FoodsService } from "./services/foods.service";
import { AppComponent } from './app.component';
import { FoodsPageComponent } from './pages/foods-page/foods-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
