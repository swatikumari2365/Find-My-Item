import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ItemsFoundComponent } from '../items-found/items-found.component';
import { ItemsLostComponent } from '../items-lost/items-lost.component';
import { ReportLostComponent } from '../report-lost/report-lost.component';
import { ReportFoundComponent } from '../report-found/report-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [HomeComponent,ItemsFoundComponent,ItemsLostComponent,ReportLostComponent,ReportFoundComponent,FooterComponent,NavbarComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports: [HomeComponent,ItemsFoundComponent,ItemsLostComponent,ReportLostComponent,ReportFoundComponent,FooterComponent,NavbarComponent]

})
export class ComponentModule { }
