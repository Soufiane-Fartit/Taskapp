import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { ListitemComponent } from './listitem/listitem.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() Lists : {title: string;tasks: string[];}[];
  @Input() selected: number;
  @Output() _selected = new EventEmitter<number>();

  constructor() { }

  setActive(n:number) {
    this.selected = n;
    console.log('changed active to', this.selected);
    this.sendNewActive();
  }

  sendNewActive() {
    this._selected.emit(this.selected);
    console.log('sended active change 2 request for', this.selected);
  }

  ngOnInit(): void {
  }

}
