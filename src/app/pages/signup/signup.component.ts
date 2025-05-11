import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  signup() {
    console.log('Sign up with', this.name, this.email, this.password);
    // Call AuthService signup method here
  }
}
