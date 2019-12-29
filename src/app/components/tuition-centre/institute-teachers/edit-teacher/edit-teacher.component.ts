import { Component, OnInit, ViewChild } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit {
  teacher:Teacher;
  childLink:string="Surabhi";
  addDelete:boolean=true;
  addSave:boolean=true;

  constructor(private router: Router, private route: ActivatedRoute) { 
    this.teacher = new Teacher();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teacher.id = +this.route.snapshot.paramMap.get("id");
      if(this.teacher.id != undefined && this.teacher.id >0){
        this.teacher.firstName="Surabhi";
        this.teacher.lastName="Gupta";
        this.teacher.batches=new Array<string>();
        this.teacher.batches.push("Evening 6PM to 7PM");
        this.teacher.batches.push("Evening 7PM to 8PM");
        this.teacher.subjects=new Array<string>();
        this.teacher.subjects.push("Math");
        this.teacher.subjects.push("English");
        this.teacher.subjects.push("Hindi");
        this.teacher.subjects.push("EVS");
        this.teacher.salary="10000";
        this.teacher.startDate=(new Date(2018,7,1)).toDateString();
        this.teacher.mobile = "9910007451";
        this.teacher.email="shubhgupta4u@gmail.com";
        this.teacher.address="Flat 207, Tower CS5, Supertech Capetown, Sec-74, Noida-201301"; 
      }
      else{
        this.addDelete = false;
      }   
    });    
  }
  goBack(){
    this.router.navigate(['/institute/teacher']);   
  }
  deleteTeacher(){
     
  }
  saveTeacher(){
     console.log(this.teacher);
  }
}
