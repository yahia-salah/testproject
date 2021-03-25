import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  // @ViewChild('projectName') projectName?:ElementRef;
  projectName:string="";
  projects:any[]=[];

  constructor() { 
  }
  ngAfterViewInit(): void {
    // if(this.projectName)
    //   this.projectName.nativeElement.value="";
  }

  ngOnInit(): void {
    
  }

  addProject(){
    // this.projects.push(this.projectName?.nativeElement.value);
    this.projects.push(this.projectName);
  }

  removeProject(i:number){
    this.projects.splice(i,1);
  }

}
