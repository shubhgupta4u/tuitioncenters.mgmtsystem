import { Component, OnInit } from '@angular/core';
import { SgGridColumn, SgGridColumnType } from '../../controls/sg-grid/sg-grid.component';

@Component({
  selector: 'app-institute-assignments',
  templateUrl: './institute-assignments.component.html',
  styleUrls: ['./institute-assignments.component.scss']
})
export class InstituteAssignmentsComponent implements OnInit {

  constructor() { }
  columns:SgGridColumn[];

  ngOnInit() {
    this.createColumns();
  }
  viewAssignmentData(data:any){
    console.log(data);
  }
  createColumns(){
    this.columns = new Array<SgGridColumn>();
    let col1:SgGridColumn= new SgGridColumn();
    col1.field="assignmentTitle"
    col1.headerName="Assignment Title"
    col1.dataType=SgGridColumnType.hyperlink;
    col1.hyperlinkClickCallback = this.viewAssignmentData;
    this.columns.push(col1);
    let col2:SgGridColumn= new SgGridColumn();
    col2.field="assignmentType"
    col2.headerName="Type"
    this.columns.push(col2);
    let col3:SgGridColumn= new SgGridColumn();
    col3.field="assignmentTo"
    col3.dataType =SgGridColumnType.array;
    col3.headerName="Assignment To"
    this.columns.push(col3);
    let col4:SgGridColumn= new SgGridColumn();
    col4.field="teacher"
    col4.headerName="Teacher"
    this.columns.push(col4);
    let col5:SgGridColumn= new SgGridColumn();
    col5.field="assignmentDate"
    col5.headerName="Assignment Date"
    col5.dataType =SgGridColumnType.date;
    this.columns.push(col5);
    let col6:SgGridColumn= new SgGridColumn();
    col6.field="submissionDate"
    col6.headerName="Submission Date"
    col6.dataType =SgGridColumnType.date;
    this.columns.push(col6);   
  }
  onGridReady(gridApi){
    let rows = this.getData();
    gridApi.setRowData(rows);
  }
  getData(){
    let rows=new Array<any>();
    rows.push({
      id:1,
      assignmentTitle:"4-7 Tables Learn",
      assignmentType:"Student",
      assignmentTo:["Swara Gupta","Pihu Gupta"],
      teacher:"Surabhi Gupta",
      assignmentDate:new Date(2019,7,1),
      submissionDate:new Date(2019,7,3)
    });
    rows.push({
      id:2,
      assignmentTitle:"7-9 Tables Learn",
      assignmentType:"Batch",
      assignmentTo:["Evening 4PM to 5PM"],
      teacher:"Surabhi Gupta",
      assignmentDate:new Date(2019,7,1),
      submissionDate:new Date(2019,7,5)
    });
    return rows;
  }
}
