import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() childValue: any;
  text = "Hi LifeCycle Component";

  constructor() {
    console.log('::::::::::::Child Component Constructor called:::::::::');
  }

  // Passed some data from Parent component to Child component
  ngOnChanges(changes: SimpleChange) {
    console.log(":::::::::::::: Child ngOnchanges Called :::::::::::::::::");
    console.log("Changes:::::", changes);
  }

  // Whenever want to perform some action after the component render
  ngOnInit(): void {
    console.log(":::::::::::: Child ngOnInit Called :::::::::::::");
  }

  // When there will be any change done in specific component ngDoCheck lifecycle hook called
  ngDoCheck() {
    console.log("::::::::::: Child ngDoCheck Called :::::::::::::");
  }

  onClickTextChange() {
    this.text = "Lifecycle Hook ngDoCheck Called";
  }

  // Not important
  // It called whenever we want to pass custom element or information in the component like-
  // <app-lifecycle-hooks> Hey My Name is Shani Kumar Gupta</app-lifecycle-hooks>
  ngAfterContentInit() {
    console.log(":::::::::: Child ngAfterContentInit Called :::::::::::");
  }

  // If the content changed inside the custom tag then it will called
  ngAfterContentChecked() {
    console.log("::::::::::: Child ngAfterContentChecked Called ::::::::::");
  }

  /*<app-lifecycle-hooks [childValue]="name">
    <h1>Hey!! My name is Shani Kumar Gupta</h1>
    {{name}} // This one
  </app-lifecycle-hooks>*/
  ngAfterViewInit() {
    console.log("::::::::: Child ngAfterViewInit Called :::::::::::");
  }

  // Atlast when all the component and property bind with the view this will called
  ngAfterViewChecked() {
    console.log(":::::::::: Child ngAfterViewChecked Called ::::::::::");
  }

  // Called whenever the component getting destroyed
  ngOnDestroy() {
    console.log("::::::::: Child ngOnDestroy Called ::::::::::");
  }

}
