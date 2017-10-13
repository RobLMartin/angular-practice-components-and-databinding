import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // pre-populated server array.
  serverElements = [
    {type: 'server', name: 'testserver', content: 'just a test'},
    {type: 'server', name: 'Another Server', content: 'more content'},
    {type: 'blueprint', name: 'A Blueprint', content: 'content'}
];

// push data to our server array.
onServerAdded(serverData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

// push data to our server array.
onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
}


}
