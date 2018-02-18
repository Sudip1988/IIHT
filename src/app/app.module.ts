import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddWorkOutComponent } from './add-work-out/add-work-out.component';

const appRoutes: Routes = [
  { path: 'Create', component: AddWorkOutComponent },
  // { path: 'Movie', component: MovieComponent },
  // { path: 'Currency', component: CurrencyComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddWorkOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
