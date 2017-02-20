import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'
import {DashboardComponent} from './dashboard.component'
import{AppRoutingModule} from './app-routing.module'
/*这个Routes是一个路由定义的数组。此时只有一个路由定义
  路由定义主要包括以下的部分：
  path:路由器会用它来匹配浏览器地址栏中的地址，如heroes.
  component:导航到此路由时，路由器需要创建的组件.
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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
