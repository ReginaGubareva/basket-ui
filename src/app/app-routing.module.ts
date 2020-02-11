import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsComponent} from './component/news/news.component';
import {NotfoundComponent} from './component/notfound/notfound.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AssociationComponent} from './component/association/association.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'association',
    component: AssociationComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
