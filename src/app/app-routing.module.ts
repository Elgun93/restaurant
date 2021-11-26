import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PhotosComponent } from './photos/photos.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'aboutus', component:AboutusComponent },
  { path:'recipes', component:RecipesComponent },
  { path:'menu', component:MenuComponent },
  { path:'photos', component:PhotosComponent },
  { path:'contact', component:ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
