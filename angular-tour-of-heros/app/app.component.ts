import { Component,OnInit } from '@angular/core';
import {Hero} from './hero'
import{HeroService} from './hero.service'


@Component({
  selector: 'my-app',

  styles: [
    `
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`
  ],
  //更新@Component装饰器中指定的模板，为这些新属性建立数据绑定
  template:
  `       <h1>{{title}}</h1> 
          <h2>My Heroes</h2>

           <!--借助Angular来实现将组件中的Heroes绑定到模板中，迭代并逐个显示它们-->
           <ul class="heroes">
              <li *ngFor="let hero of heroes" 
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)" >  <!--ngFor是Angular的内置指令 *是其重要部分-->
                  <!--each hero goes here-->
                  <span class="badge">{{hero.id}}</span>{{hero.name}}
              </li>
           </ul>

           <!--将AppComponent组件的selectedHero属性和HeroDetailComponent组件hero属性绑定在一起，这样AppComponent就额可以和HeroDetailComponent协同工作。-->
           <my-hero-detail [hero]="selectedHero"></my-hero-detail>
         
           `, //第一行是单项数据绑定的“插值表达式” 形式,这种单项绑定的方式。当input中的name发生变化时，是无法将<h2>中的name发生改变的。
   providers:[HeroService],
})


export class AppComponent{

  //构造方法
  constructor(private heroservice:HeroService){}
  
  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero:Hero

  onSelect(hero: Hero): void {
    this.selectedHero= hero;
  }

  getHeroes():void{
    //this.heroes = this.heroservice.getHeroes();
    this.heroservice.getHeroes().then(heroes=>this.heroes=heroes)
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }

}
 



