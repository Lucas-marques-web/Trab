import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/menu', icon: 'home' },
    { title: 'Info', url: '/info', icon: 'information-circle' },
    { title: 'Timer', url: 'timer', icon: 'alarm' },
    { title: 'Api', url: '/users', icon: 'newspaper' },
  ];
  public labels = ['500 mL', '1 L', '3 L', '5 L'];
  constructor() {}

}