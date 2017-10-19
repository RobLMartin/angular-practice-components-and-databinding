import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // EventEmitter Declaration.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameIput: HTMLInputElement) {
    // emitting our events
    this.serverCreated.emit({
      serverName: nameIput.value,
      serverContent: this.newServerContent});
  }

  // emitting our event
  onAddBlueprint(nameIput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameIput.value,
      serverContent: this.newServerContent
    });
  }

}
