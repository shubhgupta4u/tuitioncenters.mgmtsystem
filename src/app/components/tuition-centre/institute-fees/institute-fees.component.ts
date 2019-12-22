import { Component, OnInit } from '@angular/core';
import { SgGridColumn } from '../../controls/sg-grid/sg-grid.component';

@Component({
  selector: 'app-institute-fees',
  templateUrl: './institute-fees.component.html',
  styleUrls: ['./institute-fees.component.scss']
})
export class InstituteFeesComponent implements OnInit {

  constructor() { }
  columns:SgGridColumn[];

  ngOnInit() {
  }

}
