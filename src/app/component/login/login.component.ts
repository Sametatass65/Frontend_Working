import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fromBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.creatLoginFrom();
  }
  creatLoginFrom(){
    this.loginForm = this.fromBuilder.group({
      email: ["",Validators.required],
      password: ["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response=>{
        console.log(response)
        this.toastrService.info(response.message);
        localStorage.setItem("token",response.data.token);
      },responseError=>{
          this.toastrService.error(responseError.error,"hata");
      })
    }
  }

}
