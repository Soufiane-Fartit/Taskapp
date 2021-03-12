import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  new = true;

  Lists = [
    {'id':0, 'title':'Buy', 'tasks':['food', 'soda', 'wine'], 'states':[0,0,0]},
    {'id':1, 'title':'Do', 'tasks':['homework', 'sport', 'drink water'], 'states':[0,0,1]},
    {'id':2, 'title':'study', 'tasks':['book', 'ml', 'stats', 'proba'], 'states':[0,1,1,0]},
    {'id':3, 'title':'Buy', 'tasks':['food', 'soda', 'wine'], 'states':[0,0,0]},
  ];

  selected: number=2;

  constructor() {}

  setActive(n:number) {
    this.selected = n;
    console.log('changed active to', this.selected);
    sessionStorage.removeItem('Lists');
    sessionStorage.removeItem('selected');
    sessionStorage.setItem('Lists', JSON.stringify(this.Lists));
    sessionStorage.setItem('selected', JSON.stringify(this.selected));
    this.new=false;
    sessionStorage.setItem('new', JSON.stringify(this.new));
    window.location.reload();
  }

  updateState(obj:any) {
    console.log('received state change 2 request for', obj.selectedList, obj.updatedItem);
    
    sessionStorage.removeItem('Lists');
    sessionStorage.removeItem('selected');
    sessionStorage.setItem('Lists', JSON.stringify(this.Lists));
    sessionStorage.setItem('selected', JSON.stringify(this.selected));
    this.new=false;
    sessionStorage.setItem('new', JSON.stringify(this.new));
    window.location.reload();
  }

  deleteTask(obj:any) {
    console.log('received # delete request for ', obj.selectedList, obj.updatedItem);
    this.Lists[obj.selectedList]['tasks'].splice(obj.updatedItem, 1);
    this.Lists[obj.selectedList]['states'].splice(obj.updatedItem, 1);
    sessionStorage.setItem('Lists', JSON.stringify(this.Lists));
    sessionStorage.setItem('selected', JSON.stringify(this.selected));
    this.new=false;
    sessionStorage.setItem('new', JSON.stringify(this.new));
    window.location.reload();
  }

  ngOnInit(): void {
    //localStorage vs sessionStorage
    this.new = JSON.parse(sessionStorage.getItem('new'));
    if (this.new==false) {
      console.log('loading')
      this.Lists = JSON.parse(sessionStorage.getItem('Lists'));
      this.selected = JSON.parse(sessionStorage.getItem('selected'));
    }
  }

}
