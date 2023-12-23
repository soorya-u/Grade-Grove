import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { MarksService } from 'src/app/services/marks.service';
import { Router, ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  name: string;
  route: ActivatedRoute = inject(ActivatedRoute);
  sem = this.route.snapshot.params['sem'];
  observable: Observable<Rankers> = this.api.getSemResult(this.sem);
  rankings: Rankers | any;

  constructor(private api: MarksService) {
    switch (this.sem) {
      case 'first-sem':
        this.name = 'First';
        break;
      case 'second-sem':
        this.name = 'Second';
        break;
      case 'third-sem':
        this.name = 'Third';
        break;
      default:
        this.name = '';
    }
  }

  ngOnInit(): void {
    this.observable.subscribe((res) => {
      this.rankings = res;
    });
  }
}
