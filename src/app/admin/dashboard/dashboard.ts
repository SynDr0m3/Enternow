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
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  // constructor() {}

  name: string = 'Abdulmuiz';

  filter: string[] = ['All', 'Active', 'Inactive'];

  // Combined staff and department into a single array of objects
  staffList: StaffMember[] = [
    { name: 'Tope', department: 'Administration', count: '4/5' },
    { name: 'Sayo', department: 'Sales', count: '1/5' },
    { name: 'Segun', department: 'Production', count: '2/5' },
    { name: 'Able', department: 'Human Resources', count: '4/5' },
    { name: 'Janet', department: 'IT', count: '3/5' },
  ];

  // constructor() {}

  // Function to get a random staff member and department
  // getRandomStaff(): StaffMember {
  //   const randomIndex = Math.floor(Math.random() * this._staff.length);
  //   return {
  //     name: this._staff[randomIndex],
  //     department: this._departments[randomIndex],
  //   };
  // }

  // Keep original arrays for other uses if needed
  private _staff = ['Tope', 'Sayo', 'Segun', 'Able', 'Janet'];
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

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
