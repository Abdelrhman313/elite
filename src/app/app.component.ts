import { getWindow, getDocument } from 'ssr-window';

const window = getWindow();
const document = getDocument();

import { Component, OnInit } from '@angular/core';
import { RoutingAnimation } from './shared/animations/routing-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RoutingAnimation],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  onActivate(event: any) {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 800);
  }
}
