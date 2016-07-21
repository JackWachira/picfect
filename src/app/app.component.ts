import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { HomeComponent } from './home';
import { AuthComponent } from './auth';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <router-outlet *shellNoRender></router-outlet>
  `,
  styles: [`
    .fill-space { 
       flex: 1 1 auto;
    }
    .img-circle{
      width: 30px;
      height: 30px;
      border:1px solid white;
      border-radius: 30px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px; 
    }
    #user-name{
      margin-right: 10px;
      font-size: 15px;
    }
  `],
  directives: [APP_SHELL_DIRECTIVES,
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS,MdIconRegistry, HTTP_PROVIDERS],
})
@RouteConfig([
  {path: '/home', component: HomeComponent},
  {path: '/', component: AuthComponent, useAsDefault: true}
])
export class AppComponent {
  title = 'Picfect';
}
