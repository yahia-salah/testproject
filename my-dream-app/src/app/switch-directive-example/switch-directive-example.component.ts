import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive-example',
  templateUrl: './switch-directive-example.component.html',
  styleUrls: ['./switch-directive-example.component.css']
})
export class SwitchDirectiveExampleComponent implements OnInit {

  persons: any[] = [
    { name: "Tom", country: "Canada" },
    { name: "Mona", country: "Egypt" },
    { name: "Mark", country: "USA" }];

  constructor() { }

  ngOnInit(): void {
  }

}
