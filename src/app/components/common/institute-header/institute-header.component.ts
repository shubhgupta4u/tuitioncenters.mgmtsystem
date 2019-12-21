import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-institute-header',
  templateUrl: './institute-header.component.html',
  styleUrls: ['./institute-header.component.scss']
})
export class InstituteHeaderComponent implements OnInit {

  @Input()
  instituteName:string;

  constructor() { }

  ngOnInit() {
  }

}
