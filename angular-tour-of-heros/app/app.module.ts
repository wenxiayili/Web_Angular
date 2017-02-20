import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'
import {DashboardComponent} from './dashboard.component'
/*这个Routes是一个路由定义的数组。此时只有一个路由定义
  路由定义主要包括以下的部分：
  path:路由器会用它来匹配浏览器地址栏中的地址，如heroes.
  component:导航到此路由时，路由器需要创建的组件.
*/


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
     {
       path:'dashboard',
       component:DashboardComponent
     },
     {
       path:'detail/:id',
       component:HeroDetailComponent
     },
     {
       path:'detail:/id',
       component:HeroDetailComponent
     }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    HeroService

  ]
})
export class AppModule { }
