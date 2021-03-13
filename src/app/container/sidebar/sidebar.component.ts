import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ListitemComponent } from './listitem/listitem.component';
import { NewPopupComponent } from './new-popup/new-popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() Lists : {title: string;tasks: string[];}[];
  @Input() selected: number;
  @Output() _selected = new EventEmitter<number>();
  @Output() _newList = new EventEmitter<string>();

  newList:string="";

  constructor(public matDialog: MatDialog) { }

  setActive(n:number) {
    this.selected = n;
    console.log('changed active to', this.selected);
    this.sendNewActive();
  }

  sendNewActive() {
    this._selected.emit(this.selected);
    console.log('sended active change 2 request for', this.selected);
  }

  openPopup() {
    console.log('oppening popup');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(NewPopupComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(() => {
      this.newList = modalDialog.componentInstance.ListName;
      console.log('got new list name :', this.newList);
      if (this.newList.length>0) {
        //this.Lists.push({'title':this.newList, 'tasks':[] });
        this.sendNewList(this.newList);
      }
    });
  }

  sendNewList(newList:string) {
    this._newList.emit(newList);
  }

  ngOnInit(): void {
  }

}
