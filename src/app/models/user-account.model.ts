export class UserAccount {
    email:string
    password :string
    first_name:string
    last_name :string
    mobile_no:string
    tuition_centre_name:string

    constructor(email, password, first_name,last_name,mobile_no,tuition_centre_name){
        this.email=email;
        this.password=password;
        this.first_name=first_name;
        this.last_name=last_name;
        this.mobile_no=mobile_no;
        this.tuition_centre_name=tuition_centre_name;       
    }
}
