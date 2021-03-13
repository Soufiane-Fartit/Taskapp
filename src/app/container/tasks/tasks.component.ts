import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskitemComponent } from './taskitem/taskitem.component';
import { NewPopupComponent } from '../sidebar/new-popup/new-popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
  @Output() _newTask = new EventEmitter<string>();

  newTask:string="";

  currentList: { tasks: string; states: boolean; }[];
  
  constructor(public matDialog: MatDialog) { }

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

  openPopup() {
    console.log('oppening popup');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {"windowType":"Task"};
    const modalDialog = this.matDialog.open(NewPopupComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(() => {
      this.newTask = modalDialog.componentInstance.ListName;
      console.log('got new task name :', this.newTask);
      if (this.newTask.length>0) {
        //this.Lists[this.selected]['tasks'].push(this.newTask);
        //this.Lists[this.selected]['states'].push(false);
        console.log(this.Lists[this.selected]['tasks']);
        this.sendnewTask(this.newTask);
      }
    });
  }

  sendnewTask(newTask:string) {
    this._newTask.emit(newTask);
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
