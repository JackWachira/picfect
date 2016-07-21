import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
import {HTTP_PROVIDERS} from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ROUTER_PROVIDERS } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ APP_SHELL_RUNTIME_PROVIDERS,HTTP_PROVIDERS,AUTH_PROVIDERS, ROUTER_PROVIDERS ]);

