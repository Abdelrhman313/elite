import {
  Component,
  OnInit,
} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  lang: any

  projects: any = [
    '/assets/imgs/projects/projects1.jpg',
    '/assets/imgs/projects/projects2.jpg',
    '/assets/imgs/projects/projects3.jpg',
    '/assets/imgs/projects/projects4.jpg',
    '/assets/imgs/projects/projects5.jpg',
    '/assets/imgs/projects/projects6.jpg',
    '/assets/imgs/projects/projects7.jpg',
    '/assets/imgs/projects/projects8.jpg',
    '/assets/imgs/projects/projects9.jpg',
    '/assets/imgs/projects/projects10.jpg',
    '/assets/imgs/projects/projects11.jpg',
    '/assets/imgs/projects/projects12.jpg',
    '/assets/imgs/projects/projects13.jpg',
    '/assets/imgs/projects/projects14.jpg',
    '/assets/imgs/projects/projects15.jpg',
    '/assets/imgs/projects/projects16.jpg',
    '/assets/imgs/projects/projects17.jpg',
  ]

  projects2: any = [
    '/assets/imgs/vila/vila1.jpg',
    '/assets/imgs/vila/vila2.jpg',
    '/assets/imgs/vila/vila3.jpg',
    '/assets/imgs/vila/vila4.jpg',
    '/assets/imgs/vila/vila5.jpg',
    '/assets/imgs/vila/vila6.jpg'
  ]

  projects3: any = [
    '/assets/imgs/inner/inner1.jpg',
    '/assets/imgs/inner/inner2.jpg',
    '/assets/imgs/inner/inner3.jpg',
    '/assets/imgs/inner/inner4.jpg',
    '/assets/imgs/inner/inner5.jpg',
    '/assets/imgs/inner/inner6.jpg',
    '/assets/imgs/inner/inner7.jpg',
    '/assets/imgs/inner/inner8.jpg',
    '/assets/imgs/inner/inner9.jpg',
    '/assets/imgs/inner/inner10.jpg',
  ]

  constructor(
    private translateService: TranslateService
  ) {
    this.lang = this.translateService.currentLang;

    this.translateService.onLangChange.subscribe((res) => {
      this.lang = res?.lang
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    AOS.init({
      disable: 'phone',
      startEvent: 'DOMContentLoaded',
      duration: 1500,

    });

    window.onresize = () => {
      AOS.refresh();

    }
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
