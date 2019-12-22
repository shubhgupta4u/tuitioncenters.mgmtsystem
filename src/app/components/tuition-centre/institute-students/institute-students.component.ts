import { Component, OnInit } from '@angular/core';
import { SgGridColumn, SgGridColumnType } from '../../controls/sg-grid/sg-grid.component';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-institute-students',
  templateUrl: './institute-students.component.html',
  styleUrls: ['./institute-students.component.scss']
})
export class InstituteStudentsComponent implements OnInit {

  constructor() { }
  columns:SgGridColumn[];

  ngOnInit() {
    this.createColumns();
  }
  viewStudentData(data:any){
    console.log(data);
  }
  createColumns(){
    this.columns = new Array<SgGridColumn>();
    let col1:SgGridColumn= new SgGridColumn();
    col1.field="firstName"
    col1.headerName="First name"
    col1.dataType=SgGridColumnType.hyperlink;
    col1.hyperlinkClickCallback = this.viewStudentData;
    this.columns.push(col1);
    let col2:SgGridColumn= new SgGridColumn();
    col2.field="lastName"
    col2.headerName="Last name"
    this.columns.push(col2);
    let col3:SgGridColumn= new SgGridColumn();
    col3.field="batches"
    col3.headerName="Batches"
    col3.dataType=SgGridColumnType.array;
    this.columns.push(col3);  
    let col4:SgGridColumn= new SgGridColumn();
    col4.field="fee"
    col4.headerName="Fees"
    col4.dataType=SgGridColumnType.currency;
    this.columns.push(col4);
    let col5:SgGridColumn= new SgGridColumn();
    col5.field="startDate"
    col5.headerName="Start date"
    col5.dataType=SgGridColumnType.date;
    this.columns.push(col5);
    let col6:SgGridColumn= new SgGridColumn();
    col6.field="mobile"
    col6.headerName="Mobile No"
    this.columns.push(col6);
    let col7:SgGridColumn= new SgGridColumn();
    col7.field="email"
    col7.headerName="E-mail"
    this.columns.push(col7);
    let col8:SgGridColumn= new SgGridColumn();
    col8.field="address"
    col8.headerName="Address"
    this.columns.push(col8);
    let col9:SgGridColumn= new SgGridColumn();
    col9.field="guardianName"
    col9.headerName="Guardian Name"
    this.columns.push(col9);
    let col10:SgGridColumn= new SgGridColumn();
    col10.field="guardianRelation"
    col10.headerName="Guardian Relation"
    this.columns.push(col10);
    let col11:SgGridColumn= new SgGridColumn();
    col11.field="guardianMobile"
    col11.headerName="Guardian Mobile"
    this.columns.push(col11);
  }
  onGridReady(gridApi){
    let rows = this.getData();
    gridApi.setRowData(rows);
  }
  getData(){
    let rows=new Array<Student>();
    let student1=new Student();
    student1.firstName="Swara";
    student1.lastName="Gupta";
    student1.batches=new Array<string>();
    student1.batches.push("Evening 4PM to 5PM");
    student1.fee=1000;
    student1.startDate=new Date(2019,7,1);
    student1.mobile = "9910007451";
    student1.email="shubhgupta4u@gmail.com";
    student1.address="Flat 207, Tower CS5, Supertech Capetown, Sec-74, Noida-201301"
    student1.guardianName ="Shubh Gupta";
    student1.guardianRelation="Father";
    student1.guardianMobile="9871117950";
    rows.push(student1);
    let student2=new Student();
    student2.firstName="Pihu";
    student2.lastName="Gupta";
    student2.batches=new Array<string>();
    student2.batches.push("Evening 4PM to 5PM");
    student2.fee=1500;
    student2.startDate=new Date(2019,7,1);
    student2.mobile = "9910007451";
    student2.email="shubhgupta4u@gmail.com";
    student2.address="Flat 207, Tower CS5, Supertech Capetown, Sec-74, Noida-201301"
    student2.guardianName ="Surabhi Gupta";
    student2.guardianRelation="Mother";
    student2.guardianMobile="9910007451";
    rows.push(student2);
    return rows;
  }

}
