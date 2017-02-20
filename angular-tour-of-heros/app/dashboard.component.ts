import {Component,OnInit} from '@angular/core';
import{HeroService} from './hero.service';
import{Hero} from './hero';


@Component({
    moduleId:module.id,
    selector:'my-dashboard',
    templateUrl:'dashboard.component.html',
})

export class DashboardComponent implements OnInit{

    heroes:Hero[] = [];
    constructor(private HeroService:HeroService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.HeroService.getHeroes()
        .then(heroes=>this.heroes=heroes.slice(1,5));
    }
}