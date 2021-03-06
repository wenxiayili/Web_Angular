/*导入Angular的Injectable函数，并作为@Injectable()装饰器使用这个函数
  当TypeScript看到@Injectable()装饰器时，就会几下本服务的元数据。如果
  Angular需要往这个服务注入其他依赖，就会使用这些元数据。
*/
import { Injectable } from '@angular/core';
import{Hero} from './hero'
import{HEROES} from './mock-heroes'

@Injectable()

export class HeroService{

    //得到英雄列表
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    } //stub

    //得到一个英雄的
    getHero(id:number):Promise<Hero>{
        return this.getHeroes()
                .then(heroes=>heroes.find(hero=>hero.id===id));
    }

   
}