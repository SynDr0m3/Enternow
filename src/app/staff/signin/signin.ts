import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin implements OnInit {
  constructor(private fb: FormBuilder) {} //dependency injection

  signInForm!: FormGroup; //property declaration for form group

  ngOnInit() {
    //lifecycle hook
    this.buildForm(); //method call to build form
  }

  companyName: String = 'EnterNow Inc.'; //property
  showName: boolean = true;
  cars: string[] = ['Volvo', 'Saab', 'Mercedes', 'Audi'];
  userCase: string = 'staff';

  buildForm() {
    //method to build form
    this.signInForm = this.fb.group({
      staffId: ['exampleStaffId', [Validators.required]],
      password: [
        'examplePassword',
        [Validators.required, Validators.minLength(8), Validators.maxLength(16)],
      ],
    });
  }
  submitForm() {
    console.log(this.signInForm.value);
  }
}
