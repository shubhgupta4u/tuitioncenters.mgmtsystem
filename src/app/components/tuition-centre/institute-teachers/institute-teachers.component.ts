import { Component, OnInit } from '@angular/core';
import { SgGridColumn, SgGridColumnType } from '../../controls/sg-grid/sg-grid.component';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-institute-teachers',
  templateUrl: './institute-teachers.component.html',
  styleUrls: ['./institute-teachers.component.scss']
})
export class InstituteTeachersComponent implements OnInit {

  constructor() { }
  columns:SgGridColumn[];

  ngOnInit() {
    this.createColumns();
  }
  viewTeacherData(data:any){
    console.log(data);
  }
  createColumns(){
    this.columns = new Array<SgGridColumn>();
    let col1:SgGridColumn= new SgGridColumn();
    col1.field="firstName"
    col1.headerName="First name"
    col1.dataType=SgGridColumnType.hyperlink;
    col1.hyperlinkClickCallback = this.viewTeacherData;
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
    col4.field="subjects"
    col4.headerName="Subjects"
    col4.dataType=SgGridColumnType.array;
    this.columns.push(col4);
    let col5:SgGridColumn= new SgGridColumn();
    col5.field="salary"
    col5.headerName="Salary"
    col5.dataType=SgGridColumnType.currency;
    this.columns.push(col5);
    let col6:SgGridColumn= new SgGridColumn();
    col6.field="startDate"
    col6.headerName="Start date"
    col6.dataType=SgGridColumnType.date;
    this.columns.push(col6);
    let col7:SgGridColumn= new SgGridColumn();
    col7.field="mobile"
    col7.headerName="Mobile No"
    this.columns.push(col7);
    let col8:SgGridColumn= new SgGridColumn();
    col8.field="email"
    col8.headerName="E-mail"
    this.columns.push(col8);
    let col9:SgGridColumn= new SgGridColumn();
    col9.field="address"
    col9.headerName="Address"
    this.columns.push(col9);
  }
  onGridReady(gridApi){
    let rows = this.getData();
    gridApi.setRowData(rows);
  }
  getData(){
    let rows=new Array<Teacher>();
    let teacher=new Teacher();
    teacher.firstName="Surabhi";
    teacher.lastName="Gupta";
    teacher.batches=new Array<string>();
    teacher.batches.push("Evening 6PM to 7PM");
    teacher.batches.push("Evening 7PM to 8PM");
    teacher.subjects=new Array<string>();
    teacher.subjects.push("Math");
    teacher.subjects.push("English");
    teacher.subjects.push("Hindi");
    teacher.subjects.push("EVS");
    teacher.salary=10000;
    teacher.startDate=new Date(2018,7,1);
    teacher.mobile = "9910007451";
    teacher.email="shubhgupta4u@gmail.com";
    teacher.address="Flat 207, Tower CS5, Supertech Capetown, Sec-74, Noida-201301"
    rows.push(teacher);
    return rows;
  }
}
