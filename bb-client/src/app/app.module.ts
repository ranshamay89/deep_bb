import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ChatComponent } from './chat/chat.component';
import {ChatService} from "./chat/chat.service";
import {TwitterComponent} from "./twitter/twitter.component";
import { RouterModule, Routes } from '@angular/router';
import { BbMainComponent } from './bb-main/bb-main.component';
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  { path: 'tweet', component: TwitterComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'main', component: BbMainComponent},
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: BbMainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    BbMainComponent,
    AppComponent,
    ChatComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
