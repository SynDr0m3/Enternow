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

  ngOnInit(): void {
    // Add any initialization logic here
  }
}
