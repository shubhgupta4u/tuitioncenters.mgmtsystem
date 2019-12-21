import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuition-centre',
  templateUrl: './tuition-centre.component.html',
  styleUrls: ['./tuition-centre.component.scss']
})
export class TuitionCentreComponent implements OnInit {

  instituteName:string="Surabhi Coaching Class"
  constructor() { }

  ngOnInit() {
  }

}
