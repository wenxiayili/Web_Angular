
//英雄详细信息
import{Component,Input,OnInit} from '@angular/core'
import {Hero} from './hero';
import{ActivatedRoute,Params} from '@angular/router';
import{Location} from '@angular/common';
import{HeroService} from './hero.service' ;

//导入switchMap运算符，之后会与路由参数Observable一起使用
import 'rxjs/add/operator/switchMap';

@Component({
    selector:'my-hero-detail',
    template:`
          <div *ngIf="hero">
              <h2>{{hero.name}} details!</h2>
              <div><label>id:</label>{{hero.id}}</div>
                <div>
                  <label>name:</label>
              
                  <input [(ngModel)]="hero.name" placeholder="name">
                </div>
                <button (click)="goBack()">back</button>
           </div>
           
    
    `
})

//将ActivatedRoute和HeroService服务注入到构造函数中，将它们保存到是有变量:
export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location:Location
    ){}

    ngOnInit():void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.params
        .switchMap((params:Params)=>this.heroService.getHero(+params[id]))
        .subscribe(hero=>this.hero=hero);
    }

    //回到“原路”的实现思路:使用Location服务
    goBack():void{
        this.location.back();
    }

    @Input()
    hero:Hero;
}