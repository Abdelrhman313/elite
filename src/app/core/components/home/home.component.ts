import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TranslateService } from '@ngx-translate/core';
import {
  ModalGalleryService,
  ModalGalleryRef,
  Image,
} from '@ks89/angular-modal-gallery';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lang: any;

  projects: any = [
    {
      modal: {
        img: '/assets/imgs/projects/projects1.jpg',
        title: 'project',
        description: '',
      },
      id: 1,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects2.jpg',
        title: 'project',
        description: '',
      },
      id: 2,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects3.jpg',
        title: 'project',
        description: '',
      },
      id: 3,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects4.jpg',
        title: 'project',
        description: '',
      },
      id: 4,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects5.jpg',
        title: 'project',
        description: '',
      },
      id: 5,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects6.jpg',
        title: 'project',
        description: '',
      },
      id: 6,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects7.jpg',
        title: 'project',
        description: '',
      },
      id: 7,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects8.jpg',
        title: 'project',
        description: '',
      },
      id: 8,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects9.jpg',
        title: 'project',
        description: '',
      },
      id: 9,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects10.jpg',
        title: 'project',
        description: '',
      },
      id: 10,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects11.jpg',
        title: 'project',
        description: '',
      },
      id: 11,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects12.jpg',
        title: 'project',
        description: '',
      },
      id: 12,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects13.jpg',
        title: 'project',
        description: '',
      },
      id: 13,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects14.jpg',
        title: 'project',
        description: '',
      },
      id: 14,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects15.jpg',
        title: 'project',
        description: '',
      },
      id: 15,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects16.jpg',
        title: 'project',
        description: '',
      },
      id: 16,
    },
    {
      modal: {
        img: '/assets/imgs/projects/projects17.jpg',
        title: 'project',
        description: '',
      },
      id: 17,
    },
  ];

  projects2: any = [
    {
      modal: {
        img: '/assets/imgs/vila/vila1.jpg',
        title: 'project',
        description: '',
      },
      id: 1,
    },
    {
      modal: {
        img: '/assets/imgs/vila/vila2.jpg',
        title: 'project',
        description: '',
      },
      id: 2,
    },
    {
      modal: {
        img: '/assets/imgs/vila/vila3.jpg',
        title: 'project',
        description: '',
      },
      id: 3,
    },
    {
      modal: {
        img: '/assets/imgs/vila/vila4.jpg',
        title: 'project',
        description: '',
      },
      id: 4,
    },
    {
      modal: {
        img: '/assets/imgs/vila/vila5.jpg',
        title: 'project',
        description: '',
      },
      id: 5,
    },
    {
      modal: {
        img: '/assets/imgs/vila/vila6.jpg',
        title: 'project',
        description: '',
      },
      id: 6,
    },
  ];

  projects3: any = [
    {
      modal: {
        img: '/assets/imgs/inner/inner1.jpg',
        title: 'project',
        description: '',
      },
      id: 1,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner2.jpg',
        title: 'project',
        description: '',
      },
      id: 2,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner3.jpg',
        title: 'project',
        description: '',
      },
      id: 3,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner4.jpg',
        title: 'project',
        description: '',
      },
      id: 4,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner5.jpg',
        title: 'project',
        description: '',
      },
      id: 5,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner6.jpg',
        title: 'project',
        description: '',
      },
      id: 6,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner7.jpg',
        title: 'project',
        description: '',
      },
      id: 7,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner8.jpg',
        title: 'project',
        description: '',
      },
      id: 8,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner9.jpg',
        title: 'project',
        description: '',
      },
      id: 9,
    },
    {
      modal: {
        img: '/assets/imgs/inner/inner10.jpg',
        title: 'project',
        description: '',
      },
      id: 10,
    },
  ];
  selectedCode: any = null;

  codes: any = [
    '+20',
    ' 966+  ',
    ' 1+    ',
    ' 971+  ',
    ' 965+  ',
    ' 212+  ',
    ' 44+   ',
    ' 964+  ',
    '  962+ ',
    '  90+  ',
    ' 967+  ',
    ' 63+   ',
    ' 963+  ',
    ' 960+  ',
    ' 974+  ',
    ' 973+  ',
    ' 91+   ',
    ' 249+  ',
    ' 968+  ',
    ' 213+  ',
    ' 970+  ',
    ' 961+  ',
    ' 216+  ',
    ' 880+  ',
    ' 98+   ',
    ' 62+   ',
    ' 218+  ',
    '  1+   ',
    ' 66+   ',
    ' 252+  ',
    ' 49+   ',
    ' 972+  ',
    ' 251+  ',
    '  7+   ',
    ' 33+   ',
    ' 34+   ',
    ' 371+  ',
    ' 234+  ',
    ' 86+   ',
    ' 92+   ',
    ' 60+   ',
    ' 994+  ',
    ' 254+  ',
    ' 39+   ',
    ' 46+   ',
    ' 674+  ',
    ' 94+   ',
    ' 55+   ',
    ' 256+  ',
    ' 57+   ',
    ' 509+  ',
    ' 685+  ',
    ' 676+  ',
    ' 678+  ',
    ' 52+   ',
    ' 31+   ',
    ' 61+   ',
    ' 27+   ',
    ' 221+  ',
    ' 370+  ',
    ' 257+  ',
    ' 266+  ',
    ' 233+  ',
    ' 675+  ',
    ' 809+  ',
    ' 84+   ',
    ' 269+  ',
    ' 380+  ',
    ' 852+  ',
    ' 225+  ',
    ' 43+   ',
    ' 82+   ',
    ' 48+   ',
    ' 686+  ',
    ' 977+  ',
    ' 222+  ',
    ' 229+  ',
    ' 255+  ',
    ' 30+   ',
    ' 77+   ',
    ' 224+  ',
    ' 32+   ',
    ' 51+   ',
    ' 235+  ',
    ' 351+  ',
    ' 995+  ',
    ' 54+   ',
    ' 683+  ',
    ' 81+   ',
    ' 690+  ',
    ' 290+  ',
    ' 65+   ',
    ' 261+  ',
    ' 53+   ',
    ' 58+   ',
    ' 381+  ',
    ' 40+   ',
    ' 243+  ',
    ' 677+  ',
    ' 41+   ',
    ' 248+  ',
    ' 352+  ',
    ' 47+   ',
    ' 231+  ',
    ' 253+  ',
    ' 353+  ',
    ' 593+  ',
    ' 976+  ',
    ' 95+   ',
    ' 64+   ',
    ' 237+  ',
    ' 93+   ',
    ' 211+  ',
    ' 56+   ',
    ' 996+  ',
    ' 45+   ',
    ' 420+  ',
    ' 244+  ',
    ' 220+  ',
    ' 372+  ',
    ' 387+  ',
    ' 688+  ',
    ' 232+  ',
    ' 227+  ',
    ' 358+  ',
    ' 998+  ',
    ' 682+  ',
    ' 357+  ',
    ' 226+  ',
    ' 291+  ',
    ' 505+  ',
    ' 223+  ',
    ' 355+  ',
    ' 504+  ',
    ' 855+  ',
    ' 228+  ',
    ' 260+  ',
    ' 975+  ',
    ' 242+  ',
    ' 373+  ',
    ' 502+  ',
    ' 856+  ',
    ' 247+  ',
    ' 359+  ',
    ' 36+   ',
    ' 236+  ',
    ' 886+  ',
    ' 591+  ',
    ' 264+  ',
    ' 375+  ',
    ' 377+  ',
    ' 258+  ',
    ' 506+  ',
    ' 250+  ',
    ' 389+  ',
    ' 374+  ',
    ' 356+  ',
    ' 597+  ',
    ' 595+  ',
    ' 679+  ',
    ' 385+  ',
    ' 267+  ',
    ' 1876+ ',
    ' 263+  ',
    ' 386+  ',
    ' 265+  ',
    ' 670+  ',
    ' 503+  ',
    ' 507+  ',
    ' 230+  ',
    ' 501+  ',
    ' 383+  ',
    ' 993+  ',
    ' 891+  ',
    ' 241+  ',
  ];
  constructor(
    private translateService: TranslateService,
    private modalGalleryService: ModalGalleryService,
    private http: HttpClient
  ) {
    this.lang = this.translateService.currentLang;

    this.translateService.onLangChange.subscribe((res) => {
      this.lang = res?.lang;
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    AOS.init({
      disable: 'phone',
      startEvent: 'DOMContentLoaded',
      duration: 1500,
    });

    window.onresize = () => {
      AOS.refresh();
    };
  }

  goToTop() {
    window.scroll({
      top: 800,
      left: 0,
      behavior: 'smooth',
    });
  }

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(
      image,
      this.projects
    );
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.projects,
      currentImage: this.projects[index],
      // dir: this.lang == 'ar' ? 'rtl' : 'ltr',
    }) as ModalGalleryRef;
  }
  openImageModalRowDescription2(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(
      image,
      this.projects2
    );
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.projects2,
      currentImage: this.projects2[index],
      // dir: this.lang == 'ar' ? 'rtl' : 'ltr',
    }) as ModalGalleryRef;
  }

  openImageModalRowDescription3(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(
      image,
      this.projects3
    );
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.projects3,
      currentImage: this.projects3[index],
      // dir: this.lang == 'ar' ? 'rtl' : 'ltr',
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

  ngOnDestroy() { }

  formSubmit(data: any) {
    console.log(data);
  }
}
