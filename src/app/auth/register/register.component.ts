import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.authservice.register(this.form);
  }

  isLoading() {
    return this.authservice.isLoading;
  }
}
