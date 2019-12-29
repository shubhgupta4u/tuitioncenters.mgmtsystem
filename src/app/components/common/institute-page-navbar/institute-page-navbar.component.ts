import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-institute-page-navbar',
  templateUrl: './institute-page-navbar.component.html',
  styleUrls: ['./institute-page-navbar.component.scss']
})
export class InstitutePageNavbarComponent implements OnInit {

  @Input()
  parentLink:string;
  @Input()
  childLink:string;
  @Input()
  addNew:boolean;
  @Input()
  addDelete:boolean;
  @Input()
  addSave:boolean;

  @Output()
  parentLinkClick= new EventEmitter();
  @Output()
  addNewLinkClick= new EventEmitter();
  @Output()
  deleteLinkClick= new EventEmitter();
  @Output()
  saveLinkClick= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onParentLinkClicked(){
    this.parentLinkClick.emit();
    return false;
  }
  onAddNewLinkClicked(){
    this.addNewLinkClick.emit();
  }
  onDeleteLinkClicked(){
    this.deleteLinkClick.emit();
  }
  onSaveLinkClicked(){
    this.saveLinkClick.emit();
  }
}
