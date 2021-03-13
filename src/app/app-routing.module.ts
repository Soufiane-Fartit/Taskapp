import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NewPopupComponent } from './container/sidebar/new-popup/new-popup.component';

const routes: Routes = [
  {path: '', component:ContainerComponent},
  {path: 'newlist', component:NewPopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
