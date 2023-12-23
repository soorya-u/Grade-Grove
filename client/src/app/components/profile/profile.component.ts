import { Component, inject, OnInit } from '@angular/core';
import { MarksService } from 'src/app/services/marks.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../../interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  sem: string = this.route.snapshot.params['sem'];
  usn: string = this.route.snapshot.params['id'];
  rank = this.route.snapshot.queryParams['rank'];
  observable: Observable<Student> = this.api.getUsnResult(this.sem, this.usn);
  name: string;
  student: Student | any;

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
  ngOnInit() {
    this.observable.subscribe((res) => (this.student = res));
  }

  calculateSuperScript(n: number): string {
    if (n == 1) return 'st';
    else if (n == 2) return 'nd';
    else if (n == 3) return 'rd';
    else return 'th';
  }

  getProfilePicture(usn: string) {
    return (
      `http://localhost:7000/static/${usn}.jpg`
    );
  }
}
