import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './container/sidebar/sidebar.component';
import { TasksComponent } from './container/tasks/tasks.component';
import { ListitemComponent } from './container/sidebar/listitem/listitem.component';
import { TaskitemComponent } from './container/tasks/taskitem/taskitem.component';
import { NewPopupComponent } from './container/sidebar/new-popup/new-popup.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidebarComponent,
    TasksComponent,
    ListitemComponent,
    TaskitemComponent,
    NewPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewPopupComponent]
})
export class AppModule { }
