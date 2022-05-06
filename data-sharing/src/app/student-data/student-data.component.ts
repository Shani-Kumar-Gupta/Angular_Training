import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit, OnDestroy {
  @Input() data: any;

  childData: boolean = false;
  myName: string = 'XYZ';
  @Output() childId: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('Child Compon ngoninit called');
  }

  sendDataToParent() {
    this.childId.emit(this.childData);
  }

  ngOnDestroy(): void {
    console.log('Child Compon ngOnDestroy called');
  }
}
