import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  lang: any

  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang ?? 'ar';

    this.translate.onLangChange.subscribe((res) => {

      this.lang = res?.lang
    })
  }

  ngOnInit(): void { }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
