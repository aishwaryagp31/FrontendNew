import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from "ngx-toastr";
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

  constructor(public service:UserService,
    private router:Router,
    private toastr:ToastrService,
    private routes:ActivatedRoute) { }

  ngOnInit(): void {

  }

  onSubmit(form:NgForm)
  {
     this.addUser(form);
     this.router.navigate(['app-login-form']);
     this.resetForm(form);
  }

  addUser(form:NgForm)
  {
    this.service.postUserRegister().subscribe(
      res=>{
            this.resetForm(form);
            this.toastr.success('Account Created successfully','User Register')
      },
      err => {
        this.resetForm(form);
        this.toastr.error("Sorry, unable to register","User Register")
      }
    );
  }

resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData = new User();
  }


  
}
