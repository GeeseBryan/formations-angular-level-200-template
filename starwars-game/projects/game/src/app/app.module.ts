import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SearchComponent } from 'search';
import { HeaderModule } from './shared/components/header/header.module';
import { StatisticsComponent } from 'statistics';

@NgModule({ declarations: [
        AppComponent,
        SideBarComponent,
    ],
    bootstrap: [AppComponent, HeaderComponent, SideBarComponent],
     imports: 
     [
        BrowserModule,
        AppRoutingModule,
        GameModule,
        SearchComponent,
        StatisticsComponent,
        HeaderModule
      ], 
        providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
