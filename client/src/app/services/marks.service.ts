import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rankers, Student } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MarksService {
  constructor(private http: HttpClient) {}

  getSemResult(sem: string): Observable<Rankers> {
    return this.http.get<Rankers>(`http://localhost:7000/api/v1/${sem}`, {
      responseType: 'json',
    });
  }

  getUsnResult(sem: string, usn: string): Observable<Student> {
    return this.http.get<Student>(
      `http://localhost:7000/api/v1/${sem}/${usn}`,
      {
        responseType: 'json',
      }
    );
  }
}
