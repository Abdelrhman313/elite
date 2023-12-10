import {
  Component,
  OnInit,
} from '@angular/core';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {



  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    AOS.init();
  }

  goToTop() {
    window.scroll({
      top: 800,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngOnDestroy() { }
}
