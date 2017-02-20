"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    //构造方法
    function HeroesComponent(heroservice) {
        this.heroservice = heroservice;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        //this.heroes = this.heroservice.getHeroes();
        this.heroservice.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getHeroes();
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        styles: [
            "\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"
        ],
        //更新@Component装饰器中指定的模板，为这些新属性建立数据绑定
        template: "      \n          <h2>My Heroes</h2>\n\n           <!--\u501F\u52A9Angular\u6765\u5B9E\u73B0\u5C06\u7EC4\u4EF6\u4E2D\u7684Heroes\u7ED1\u5B9A\u5230\u6A21\u677F\u4E2D\uFF0C\u8FED\u4EE3\u5E76\u9010\u4E2A\u663E\u793A\u5B83\u4EEC-->\n           <ul class=\"heroes\">\n              <li *ngFor=\"let hero of heroes\" \n                [class.selected]=\"hero === selectedHero\"\n                (click)=\"onSelect(hero)\" >  <!--ngFor\u662FAngular\u7684\u5185\u7F6E\u6307\u4EE4 *\u662F\u5176\u91CD\u8981\u90E8\u5206-->\n                  <!--each hero goes here-->\n                  <span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n              </li>\n           </ul>\n\n           <!--\u5C06AppComponent\u7EC4\u4EF6\u7684selectedHero\u5C5E\u6027\u548CHeroDetailComponent\u7EC4\u4EF6hero\u5C5E\u6027\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u8FD9\u6837AppComponent\u5C31\u989D\u53EF\u4EE5\u548CHeroDetailComponent\u534F\u540C\u5DE5\u4F5C\u3002-->\n           <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n         \n           ",
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map