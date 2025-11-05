import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStaff } from '../interfaces/staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Admin {
  constructor(private httpClient: HttpClient) {}

  getStaff(): Observable<IStaff[]> {
    return this.httpClient.get<IStaff[]>('https://jsonplaceholder.typicode.com/users'); //this.httpClient.get<IStaff>('https://jsonplaceholder.typicode.com/users');
  }

  createStaff(staff: IStaff): Observable<IStaff> {
    return this.httpClient.post<IStaff>('https://jsonplaceholder.typicode.com/users', staff);
  }

  editStaff(id: number, staff: Partial<IStaff>): Observable<IStaff> {
    return this.httpClient.patch<IStaff>(
      `https://jsonplaceholder.typicode.com/users/${staff.id}`,
      staff
    );
  }

  deleteStaff(id: number): Observable<IStaff> {
    return this.httpClient.delete<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
