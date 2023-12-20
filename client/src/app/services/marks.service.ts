import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  constructor(private http:HttpClient) { }

  getFirstSemMarks(){
    return this.http.get("https://alpha-tech-pvt.github.io/TopTenList-API/first_sem.json");
  }
  getSecondSemMarks(){
    return this.http.get("https://alpha-tech-pvt.github.io/TopTenList-API/sec_sem.json");
  }
  getThirdSemMarks(){
    return this.http.get("https://alpha-tech-pvt.github.io/TopTenList-API/third_sem.json");
  }
}
