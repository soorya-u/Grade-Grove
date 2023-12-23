import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { MarksService } from 'src/app/services/marks.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, OnDestroy {
  name: string;
  sem: string;
  next_path: string;
  data: Object | any;
  rank: any;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(
    private location: Location,
    private api: MarksService,
    private router: Router
  ) {
    console.log(this.route.snapshot.params['sem'])
    this.next_path = this.location.path() + '/usn/';
    this.sem = this.next_path.split('/')[2];
    this.name = '';
  }

  ngOnInit(): void {

    if (this.sem === 'first-sem') {
      this.api.getFirstSemMarks().subscribe((res) => {
        this.data = res;
        this.name = 'First';
      });
    } else if (this.sem === 'second-sem') {
      this.api.getSecondSemMarks().subscribe((res) => {
        this.data = res;
        this.name = 'Second';
      });
    } else {
      this.api.getThirdSemMarks().subscribe((res) => {
        this.data = res;
        this.name = 'Third';
      });
    }
  }

  ngOnDestroy(): void {
      console.log("Component Destroyed");
  }
}
