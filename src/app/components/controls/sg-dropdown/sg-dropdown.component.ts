import { Component, OnInit, Input } from '@angular/core';

declare var initializeDropdownEditor:any;

@Component({
  selector: 'app-sg-dropdown',
  templateUrl: './sg-dropdown.component.html',
  styleUrls: ['./sg-dropdown.component.scss']
})
export class SgDropdownComponent implements OnInit {
  @Input()
  label:string;
  @Input()
  name:string;
  
  constructor() { }

  ngOnInit() {
    let self=this;
      $(document).ready(()=>{
        new initializeDropdownEditor(self.name);
      });
  }

}
