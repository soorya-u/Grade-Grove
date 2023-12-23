import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rankers, Student } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarksService {
  constructor(private http: HttpClient) {}

  getSemResult(sem: string): Observable<Rankers> {
    return this.http.get<Rankers>(`${environment.BACKEND_URL}/api/v1/${sem}`, {
      responseType: 'json',
    });
  }

  getUsnResult(sem: string, usn: string): Observable<Student> {
    return this.http.get<Student>(
      `${environment.BACKEND_URL}/api/v1/${sem}/${usn}`,
      {
        responseType: 'json',
      }
    );
  }

  getProfilePicture(usn: string) {
    return `${environment.BACKEND_URL}/static/${usn}.jpg`;
  }
}
