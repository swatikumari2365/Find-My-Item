import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportLostComponent } from './components/report-lost/report-lost.component';
import { ReportFoundComponent } from './components/report-found/report-found.component';
import { ItemsLostComponent } from './components/items-lost/items-lost.component';
import { ItemsFoundComponent } from './components/items-found/items-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'reportlost', component: ReportLostComponent },
  { path: 'reportfound', component: ReportFoundComponent },
  { path: 'lostitems', component: ItemsLostComponent },
  { path: 'founditems', component: ItemsFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
