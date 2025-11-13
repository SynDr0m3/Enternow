import { Component, OnInit } from '@angular/core';

interface StaffMember {
  name: string;
  department: string;
  count: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit {
  // total sign-ins counter (used in submitSignIn)
  signIns: number = 0;
  // constructor() {}

  name: string = 'Abdulmuiz';

  filter: string[] = ['All', 'Active', 'Inactive'];

  // Combined staff and department into a single array of objects
  staffList: StaffMember[] = [
    { name: 'Abdul', department: 'Administration', count: '3/5' },
    { name: 'Segun', department: 'Sales', count: '2/5' },
    { name: 'Gojo', department: 'Production', count: '3/5' },
    { name: 'Wong', department: 'Human Resources', count: '2/5' },
    { name: 'Todo', department: 'IT', count: '1/5' },
  ];

  // Keep original arrays for other uses if needed
  private _staff = ['Abdul', 'Segun', 'Gojo', 'Wukong', 'Todo'];
  private _departments = [
    'Administration',
    'Sales',
    'Production',
    'Human Resources',
    'Accounting',
    'Procurement',
    'Legal',
    'IT',
  ];

  // Modal state
  showSignInModal = false;
  showSuccessMessage = false;

  // Sign-in form data
  signInForm = {
    employeeId: '',
    department: '',
    email: '',
    signInTime: '',
    notes: '',
  };

  openSignInModal() {
    this.showSignInModal = true;
    this.showSuccessMessage = false;
    // Reset form
    this.signInForm = {
      employeeId: '',
      department: '',
      email: '',
      signInTime: '',
      notes: '',
    };
  }

  closeSignInModal() {
    this.showSignInModal = false;
    this.showSuccessMessage = false;
  }

  submitSignIn() {
    // Validate required fields
    if (!this.signInForm.employeeId || !this.signInForm.department || !this.signInForm.email) {
      alert('Please fill in all required fields');
      return;
    }

    // If no time provided, use current time
    if (!this.signInForm.signInTime) {
      const now = new Date();
      this.signInForm.signInTime = now.toTimeString().slice(0, 5);
    }

    // Here you would typically send this data to your backend API
    console.log('Sign-in created:', this.signInForm);

    // Show success message
    this.showSuccessMessage = true;

    // Increment sign-ins count
    this.signIns++;

    // Close modal after 2 seconds
    setTimeout(() => {
      this.closeSignInModal();
    }, 2000);
  }

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
