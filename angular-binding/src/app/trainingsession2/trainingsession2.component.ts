import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainingsession2',
  templateUrl: './trainingsession2.component.html',
  styleUrls: ['./trainingsession2.component.css']
})
export class Trainingsession2Component implements OnInit {

  title = "Training Session 2";
  subTitle = "Server Management UI";
  serverStatus = "online";
  addNewServer = false;
  serverCreationStatus = "No Server Created Yet";
  serverID = 11;
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.increamentServerID();
    this.serverCreationStatus = "One new Server Created with ID - " + this.serverID;
    console.log("Server Name:::::", this.serverName);
  }

  increamentServerID() {
    this.serverID += 1;
  }

  onUserInput(event: any) {
    console.log("event::::::::", event);
    this.serverName = event.target.value;
  }

}
