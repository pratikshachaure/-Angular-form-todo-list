import { Component } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';
  arr:any=[]
  myfun=new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z]+$")]),
    sname:new FormControl(''),
    pass:new FormControl(""),
    uemail: new FormControl("",[Validators.required,Validators.email]),
  })
  
  p:any=" "
  submitfun(){
     
     this.p=document.getElementById("demo");
     this.p.style.display="block";
     this.arr.push(this.myfun.value)
   
  }
  get bala(){
    return this.myfun.get("fname")
  }

remove(i:number){
  this.arr.splice(i,1);
}
}
