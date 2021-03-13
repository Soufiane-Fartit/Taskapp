import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {

  @Input() listTitle : string;
  @Input() id : number;
  @Output() _id = new EventEmitter<number>();
  @Input() selected : number;
  @Output() _delete = new EventEmitter<number>();

  isSelected : boolean= false;
  
  constructor() { }

  selectCurrent () {
    //this.isSelected = true;
    this._id.emit(this.id);
    console.log('sended active change request for', this.id);
  }

  deleteList(){
    this._delete.emit(this.id);
    console.log('sent delete request')
  }

  ngOnInit(): void {
    if (this.id==this.selected) {
      this.isSelected = true;
    }
  }

}
