import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskitemComponent } from './taskitem/taskitem.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() Lists : {title:string; tasks:string[]; states:boolean[];}[];
  @Input() selected: number;
  @Output() _update = new EventEmitter<object>();
  @Output() _deletedUpdate = new EventEmitter<object>();

  currentList: { tasks: string; states: boolean; }[];
  
  constructor() { }

  updateState(id:number) {
    this.Lists[this.selected]['states'][id] = !this.Lists[this.selected]['states'][id];
    console.log('received state change request for ', id);
    console.log(this.Lists[this.selected]['states']);
    this.changeNewState(id);
  }

  changeNewState(n:number) {
    this._update.emit({selectedList:this.selected, updatedItem: n});
    console.log('sended state change 2 request for', n);
  }

  deleteTask(n:number) {
    console.log('received delete request for ', n);
    console.log(this.Lists[this.selected]);
    console.log(this.Lists[this.selected]['title'], this.Lists[this.selected]['tasks'][n]);
    //this.Lists[this.selected]['tasks'].splice(n, 1);
    //this.Lists[this.selected]['states'].splice(n, 1);
    console.log(this.Lists[this.selected]['tasks']);
    this.updateDeletedTask(n);
  }

  updateDeletedTask(n:number){
    this._deletedUpdate.emit({selectedList:this.selected, updatedItem: n})
    console.log('sent delete update request for', n);
  }

  ngOnInit(): void {
    var len = this.Lists[this.selected].tasks.length;
    var tsk = this.Lists[this.selected].tasks;
    var stt = this.Lists[this.selected].states;
    var arr = [];
    
    for (var i=0; i<len; i++) {
      var T = {'id':i, 'tasks':tsk[i], 'states':stt[i]};
      arr[i] = T;
    }
    this.currentList = arr;
  }

}
