import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  constructor(private fb: FormBuilder) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  companyName = String('EnterNow inc.');
  buildForm() {
    this.loginForm = this.fb.group({
      staffId: ['exampleStaffId', [Validators.required]],
      password: [
        'examplePassword',
        [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
      ],
    });
  }

  submitForm() {
    console.log(this.loginForm.value);
  }
}
