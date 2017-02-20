import { Component,OnInit } from '@angular/core';
import {Hero} from './hero'
import{HeroService} from './hero.service'
import{Router} from '@angular/router'

@Component({

  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls:['heroes.component.css'],
  //更新@Component装饰器中指定的模板，为这些新属性建立数据绑定
         
    // providers:[HeroService], 由于HeroService被提到了模块中，所以这里就不需要了
})


export class HeroesComponent implements OnInit{

  //构造方法
  constructor(
    private router:Router,
    private heroservice:HeroService
    
  ){ }

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

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

}
 



