import { Component, OnInit } from '@angular/core';
import { SgGridColumn, SgGridColumnType } from '../../controls/sg-grid/sg-grid.component';
import { Batch } from 'src/app/models/batch.model';

@Component({
  selector: 'app-institute-batches',
  templateUrl: './institute-batches.component.html',
  styleUrls: ['./institute-batches.component.scss']
})
export class InstituteBatchesComponent implements OnInit {

  constructor() { }
  columns:SgGridColumn[];

  ngOnInit() {
    this.createColumns();
  }
  viewBatchData(data:any){
    console.log(data);
  }
  createColumns(){
    this.columns = new Array<SgGridColumn>();
    let col1:SgGridColumn= new SgGridColumn();
    col1.field="batchTitle"
    col1.headerName="Batch Title"
    col1.dataType=SgGridColumnType.hyperlink;
    col1.hyperlinkClickCallback = this.viewBatchData;
    this.columns.push(col1);
    let col2:SgGridColumn= new SgGridColumn();
    col2.field="noOfStudent"
    col2.headerName="No. of Student"
    col2.dataType = SgGridColumnType.number;
    this.columns.push(col2);
    let col3:SgGridColumn= new SgGridColumn();
    col3.field="totalFees"
    col3.headerName="Total Fees"
    col3.dataType=SgGridColumnType.currency;
    this.columns.push(col3);
    let col4:SgGridColumn= new SgGridColumn();
    col4.field="teachers"
    col4.headerName="Teachers"
    col4.dataType=SgGridColumnType.array;
    this.columns.push(col4);  
    let col5:SgGridColumn= new SgGridColumn();
    col5.field="classStartTime"
    col5.headerName="Start Time"
    col5.dataType=SgGridColumnType.time;
    this.columns.push(col5);
    let col6:SgGridColumn= new SgGridColumn();
    col6.field="classEndTime"
    col6.headerName="End Time"
    col6.dataType=SgGridColumnType.time;
    this.columns.push(col6);
    let col7:SgGridColumn= new SgGridColumn();
    col7.field="startDate"
    col7.headerName="Start Date"
    col7.dataType=SgGridColumnType.date;
    this.columns.push(col7);
  }
  onGridReady(gridApi){
    let rows = this.getData();
    gridApi.setRowData(rows);
  }
  getData(){
    let rows=new Array<Batch>();
    let batch1=new Batch();
    batch1.batchTitle="Evening 4PM to 5PM";
    batch1.noOfStudent=2;
    batch1.teachers=new Array<string>();
    batch1.teachers.push("Surabhi Gupta");
    batch1.totalFees=2500;
    batch1.startDate=new Date(2019,7,1);
    batch1.classStartTime = new Date(2019,7,1,16,0,0); 
    batch1.classEndTime = new Date(2019,7,1,17,0,0);
    rows.push(batch1);
    let batch2=new Batch();
    batch2.batchTitle="Evening 5PM to 6PM";
    batch2.noOfStudent=0;
    batch2.teachers=new Array<string>();
    batch2.teachers.push("Surabhi Gupta");
    batch2.totalFees=0;
    batch2.startDate=new Date(2019,7,1);
    batch2.classStartTime = new Date(2019,7,1,17,0,0); 
    batch2.classEndTime = new Date(2019,7,1,18,0,0);
    rows.push(batch2);
    return rows;
  }

}
