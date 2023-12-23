import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Subject = {
  _id: string;
  subject: string;
  subject_code: string;
  int_marks: number;
  ext_marks: number;
  total_marks: number;
};

type Student = {
  _id: string;
  name: string;
  usn: string;
  subjects: Subject[];
  total: number;
  spga: number;
};

type Rankers = Student[];

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

  getUsnResult(sem: string, usn: string) {
    return this.http.get(`http://localhost:7000/api/v1/${sem}/${usn}`, {
      responseType: 'json',
    });
  }
}
