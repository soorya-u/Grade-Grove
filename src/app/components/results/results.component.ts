import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MarksService } from 'src/app/services/marks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  name:string
  sem:string
  next_path:string
  data:Object | any
  rank:any

  constructor(private location: Location, private api:MarksService, private router:Router) { 
    this.next_path = this.location.path()+"/usn/";
    this.sem = this.next_path.split('/')[2];
    this.name = ""

    
    if(this.sem === "first-sem") {
      this.api.getFirstSemMarks().subscribe(res=>{
        this.data = res
        this.name="First"
      })
    }
    else if(this.sem === "sec-sem") {
      this.api.getSecondSemMarks().subscribe(res=>{
        this.data = res
        this.name="Second"
      })
    }
    else{
      this.api.getThirdSemMarks().subscribe(res=>{
        this.data = res
        this.name="Third"
      })
    }
  }
}

