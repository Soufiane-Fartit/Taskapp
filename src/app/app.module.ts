import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { TasksComponent } from './container/tasks/tasks.component';
import { ListitemComponent } from './container/sidebar/listitem/listitem.component';
import { TaskitemComponent } from './container/tasks/taskitem/taskitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidebarComponent,
    TasksComponent,
    ListitemComponent,
    TaskitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
