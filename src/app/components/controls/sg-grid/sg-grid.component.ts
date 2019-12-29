import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UtilityService } from 'src/app/services/common/utility.service';
import { Router } from '@angular/router';
import * as $ from 'jquery'

declare var initializeResponsiveGird;

@Component({
  selector: 'app-sg-grid',
  templateUrl: './sg-grid.component.html',
  styleUrls: ['./sg-grid.component.scss']
})
export class SgGridComponent implements OnInit {
  
  gridId:string="example"
  oTable:any;
  api: GridAPI;
  dataRows:any[];

  @Input("columns")
  columns:SgGridColumn[];

  @Output("gridReady")
  gridReady= new EventEmitter<GridAPI>();

  constructor(private utility:UtilityService, private router: Router) { 
    this.gridId = "sg-gird-" + Date.now()
  }

  ngOnInit() {
    this.initializeGird();
    this.initialiseApi();
    this.onGridReady();
  }
  initializeGird(){
    var self = this;
    
    $(document).ready(function () {
      self.oTable = new initializeResponsiveGird(self.gridId)
    });
  }
  initialiseApi(){
    this.api = new GridAPI();
    this.api.rowsInitialized.subscribe((rows)=>{
      this.dataRows = rows;
    });
  }
  onGridReady(){
    this.gridReady.emit(this.api);
  }
  setColumnStyles(column: SgGridColumn){
    let styles:any={};
    if(column.minWidth && column.minWidth > 0){
      styles['min-width'] =column.minWidth+ "px"
    }
    if(column.maxWidth && column.maxWidth > 0){
      styles['max-width'] =column.maxWidth+ "px"
    }
    return styles;
  }
  linkClickHandler(col:SgGridColumn, data:any){
    if(col.hyperlinkClickCallback){
      col.hyperlinkClickCallback(this.router, data);
    }
    
    return false;
  }
}
export enum SgGridColumnType{
  number,
  string,
  date,
  time,
  hyperlink,
  array,
  currency
}

export class SgGridColumn{
  headerName:string;
  field:string;
  maxWidth:number;
  minWidth:number
  hidden:boolean;
  dataType:SgGridColumnType;
  hyperlinkClickCallback:any;
}

export class GridAPI{
  rows:any[];

  @Output()
  rowsInitialized = new EventEmitter<any[]>();

  constructor(){
    this.rows=new Array<any>();
  }
  setRowData(rows:any[]){
    if(rows == null && rows == undefined){
      this.rows=new Array<any>();
    }else{
      this.rows=rows;
    }
    this.rowsInitialized.emit(this.rows);
  }
}