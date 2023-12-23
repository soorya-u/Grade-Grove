import { Component, OnInit, inject } from '@angular/core';
import { MarksService } from 'src/app/services/marks.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Rankers } from '../../interfaces';

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
    this.observable.subscribe((res) => (this.rankings = res));
  }
}
