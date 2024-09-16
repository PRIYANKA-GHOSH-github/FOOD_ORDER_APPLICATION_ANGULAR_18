import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gmailValidator } from '../../../email-Validator'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  isSubmitted=false;
  constructor(private fb :FormBuilder){}
  ngOnInit(): void {
    this.loginForm =this.fb.group({
    
      email: ['', [Validators.required, gmailValidator()]], // Apply the custom validator here
      password:['',Validators.required]
    })
      
  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid)return;

    alert(`Email: ${this.fc.email.value},
      password: ${this.fc.password.value}`)
  }


}
