import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/common/utility.service';

declare var initializeResponsiveGird;

@Component({
  selector: 'app-sg-grid',
  templateUrl: './sg-grid.component.html',
  styleUrls: ['./sg-grid.component.scss']
})
export class SgGridComponent implements OnInit {

  gridId:string="example"

  constructor(private utility:UtilityService) { 
    this.gridId = "sg-gird-" + Date.now()
  }

  ngOnInit() {
    new initializeResponsiveGird(this.gridId);
  }

}
