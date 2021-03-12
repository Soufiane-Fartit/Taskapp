import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.scss']
})
export class TaskitemComponent implements OnInit {

  @Input() id : number;
  @Input() taskText : string;
  @Input() state : boolean;
  @Output() _state = new EventEmitter<number>();
  @Output() _delete = new EventEmitter<number>();
  
  constructor() { }
  
  changeState(){
    this.state = !(this.state)
    this._state.emit(this.id);
    console.log('sended state change request for', this.id);
  }

  deleteTask() {
    this._delete.emit(this.id);
    console.log('sent delete request')
  }

  ngOnInit(): void {
    //this.changeState();
  }

}
