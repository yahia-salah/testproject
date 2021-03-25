import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  color='blue';
  twoWayBinding='';
  flag=true;

  @Input('dataFromParent') public dataFromParent='';
  @Output() public dataFromChildtoParent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:string){
    this.color=color;
  }

  resetTwoWayBindingText(){
    this.twoWayBinding='text was reset!';
  }

  callDataFromParentEvent(){
    this.dataFromChildtoParent.emit('This is some data from child to parent!');
  }

  showHide(){
    this.flag=!this.flag;
  }
}
