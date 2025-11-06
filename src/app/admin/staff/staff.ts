import { Component, OnInit } from '@angular/core';
import { Admin } from '../../services/admin';
import { IStaff } from '../../interfaces/staff';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff implements OnInit {
  staffList: IStaff[] = [];
  displayedColumns: string[] = ['date', 'timeIn', 'timeOut', 'isLate'];

  constructor(private adminService: Admin) {}

  ngOnInit() {
    this.loadStaffData();
  }

  loadStaffData() {
    this.adminService.getStaff().subscribe({
      next: (staff) => {
        // Temporary mock data for demonstration
        this.staffList = staff.map((s) => ({
          ...s,
          signInCount: Math.floor(Math.random() * 100),
          latenessCount: Math.floor(Math.random() * 20),
          deductions: Math.floor(Math.random() * 1000),
          signInHistory: Array(5)
            .fill(null)
            .map(() => ({
              date: new Date().toISOString().split('T')[0],
              timeIn:
                '08:' +
                Math.floor(Math.random() * 60)
                  .toString()
                  .padStart(2, '0'),
              timeOut:
                '17:' +
                Math.floor(Math.random() * 60)
                  .toString()
                  .padStart(2, '0'),
              isLate: Math.random() > 0.7,
            })),
        }));
      },
      error: (error) => console.error('Error loading staff data:', error),
    });
  }
}
