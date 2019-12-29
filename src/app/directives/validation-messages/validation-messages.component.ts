import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent implements OnInit {
  @Input() messages: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
