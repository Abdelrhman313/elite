import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  lang: any;

  constructor(
    public translate: TranslateService,
  ) {
    console.log(typeof localStorage.getItem('lang') ?? 'ar', localStorage.getItem('lang') ?? 'ar');

    this.lang = localStorage.getItem('lang') ?? 'ar';

    if (this.lang && this.lang != 'undefined') {
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
      localStorage.setItem('lang', this.lang);

      document.documentElement.lang = this.lang;
      document.documentElement.dir = this.lang == 'ar' ? 'rtl' : 'ltr';
    } else {
      this.lang = 'ar';
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
      localStorage.setItem('lang', this.lang);

      document.documentElement.lang = this.lang;
      document.documentElement.dir = 'rtl';
    }
  }

  ngOnInit(): void {
  }

  switchLang() {

    if (this.lang == 'ar') {
      this.lang = 'en';
      this.translate.use(this.lang);
      localStorage.setItem('lang', this.lang);
      document.documentElement.lang = this.lang;
      document.documentElement.dir = 'ltr';
    } else {
      this.lang = 'ar';
      this.translate.use(this.lang);
      localStorage.setItem('lang', this.lang);
      document.documentElement.lang = this.lang;
      document.documentElement.dir = 'rtl';
    }
    console.log(this.lang);
  }

}
