import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component/component.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
