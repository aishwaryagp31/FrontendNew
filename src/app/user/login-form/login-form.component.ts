import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {

  constructor(public service:UserService,
    private toastr:ToastrService,
    private router:Router,
    private routes:ActivatedRoute) { }
  userName:string;
  password:string;
  


  ngOnInit(): void {
  }

  onSubmit(form: NgForm)
  {
    this.service.login(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('login success','User Login');
        this.router.navigate(['app-ticket']);
      },
      err => {
        this.resetForm(form);
        console.log("Error in login","User login");
        this.toastr.show('Login Attempt Failed','User Login');
        

    }
    );
    

  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new User();
  }

  RegisterForm(form:NgForm){
    this.resetForm(form);
    this.router.navigate(['app-register-form']);
  }

}
