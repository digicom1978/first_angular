import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  dataBindings = ["1","2","3"];
  dataObjects = [{"name":"A1"},{"name":"A2"},{"name":"B1"}];
}
