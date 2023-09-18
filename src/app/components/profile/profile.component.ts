import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MarksService } from 'src/app/services/marks.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  total_path: string[]
  sem:string
  usn: string
  data: any
  name:string
  is_first_or_second:boolean

  constructor(private location: Location, private api: MarksService) {
    this.total_path = this.location.path().split("/");
    console.log(this.total_path);
    this.sem = this.total_path[2];
    this.usn = this.total_path[4];
    this.name="";
    this.is_first_or_second=false

    if(this.sem === "first-sem") {
      this.api.getFirstSemMarks().subscribe(res=>{
        this.data = res
        this.name="First"
        this.is_first_or_second=true
      })
    }
    else if(this.sem === "sec-sem") {
      this.api.getSecondSemMarks().subscribe(res=>{
        this.data = res
        this.name="Second"
        this.is_first_or_second=true
      })
    }
    else{
      this.api.getThirdSemMarks().subscribe(res=>{
        this.data = res
        this.name="Third"
        this.is_first_or_second=false
      })
    }
  }

  calculateSuperScript(n:number):string {

    if(n==1)
      return "st";
    else if(n==2)
      return "nd";
    else if(n==3)
      return "rd";
    else
      return "th";
  }
}
