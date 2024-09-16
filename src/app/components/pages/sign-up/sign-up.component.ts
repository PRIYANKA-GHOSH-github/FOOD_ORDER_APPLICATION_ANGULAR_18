import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  pincode: string = '';
  address: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate sign-up logic
    console.log('User signed up with:', {
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address
    });

    // Navigate to the next page (e.g., home page) after successful sign-up
    this.router.navigate(['/home']);
  }

  fetchAddress() {
    // Simulate an API call to fetch address based on pincode
    if (this.pincode === '123456') {
      this.address = '123, Example Street, Sample City, Example Country';
    } else {
      this.address = null;
    }
  }

  signUpWithGoogle() {
    // Simulate Google sign-up
    console.log('Sign up with Google');
  }

  signUpWithFacebook() {
    // Simulate Facebook sign-up
    console.log('Sign up with Facebook');
  }
}
