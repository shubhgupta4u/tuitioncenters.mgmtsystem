import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
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
    //dataTables_filter
    // $(document).ready(()=>{
    //   $('#btnSearchBox').on('click',function(element){
    //     var text = $('#txtSearchBox').val();
    //     var search = $('.dataTables_filter').children('label').children('input');
    //     $(search).val(text);
    //     //$(search).trigger("keypress.DT");
    //     var e = jQuery.Event("keypress.DT");
    //     e.which = 50; // # Some key code value
    //     e.keyCode = 50
    //     $(search).trigger(e);
    //     //$(search).trigger("paste.DT");
    //   })
    // });
  }

}
