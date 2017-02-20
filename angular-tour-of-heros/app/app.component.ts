
import {Component} from '@angular/core'

//注意，锚标签中的[routerLink]绑定。 我们把RouterLink指令（ROUTER_DIRECTIVES中的另一个指令）绑定到一个字符串。 它将告诉路由器，当用户点击这个链接时，应该导航到哪里。用<a routerLink="/heroes">Heroes</a>替换<my-heroes></my-heroes> 
//在模板上添加一个到仪表盘的单行连接，就放在Heroes链接的上方
@Component({
    selector:'my-app',
    template:
            `
                 <h1>{{title}}</h1> 
                 <nav>
                    <a routerLink="/dashboard">Dashboard</a>
                    <a routerLink="/heroes">Heroes</a>
                 </nav>
                 <router-outlet></router-outlet>   
            `
})

export class AppComponent{
    title = 'Tour of Heros';
}