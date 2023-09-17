import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  name:string
  sem:string
  path:string
  data:Object | any
  rank:any

  constructor(private location: Location, private api:MarksService) { 
    this.path = this.location.path()+"/";
    this.sem = this.path.split('/')[2];
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
