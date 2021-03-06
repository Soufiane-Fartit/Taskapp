import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-new-popup',
  templateUrl: './new-popup.component.html',
  styleUrls: ['./new-popup.component.scss']
})
export class NewPopupComponent implements OnInit {

  @Output() _ListName = new EventEmitter<string>();
  ListName:string;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  create() {
    //console.log('creating', this.ListName);
    this.sendCreateRequest();
  }

  sendCreateRequest() {
    this._ListName.emit(this.ListName);
    //console.log('sended create request for', this.ListName);
  }

  cancel() {
    this.ListName = "";
    window.location.reload();
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
