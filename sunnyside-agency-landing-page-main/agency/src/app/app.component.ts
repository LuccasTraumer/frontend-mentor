import {Component} from '@angular/core';
import {CardData} from "./models/card-data";
import {Depoiment} from "./models/depoiment";
import {Constantes} from "./utils/constantes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly CONSTANTES = Constantes;

  title = 'agency';

  // @ts-ignore
  arrayDataPage = Array<CardData>();
  arrayDepoiments = Array<Depoiment>();

  arrayImageData = Array<CardData>();
  arrayImageSectionMobile = Array<String>();
  arrayImageSectionDesktop = Array<String>();


  constructor() {
    this.arrayDataPage = [
      {
        header: 'Transform your brand',
        description: 'We are a full-service creative agency specializing in helping brands grow fast.' +
          'Engage your clients through compelling visuals that do most of the marketing for you.',
        textLink: 'Learn more',
        link: '#',
        images: [Constantes.EGG_IMAGE_MOBILE, Constantes.EGG_IMAGE_DESKTOP],
        isCard: true
      },
      {
        header: 'Stand out to the right audience',
        description: 'Using a collaborative formula of designers, researchers, photographers, videographers, ' +
          'and copywriters, we’ll build and extend your brand in digital places.',
        textLink: 'Learn more',
        link: '#',
        images: [Constantes.CUP_PINK_MOBILE, Constantes.CUP_PINK_DESKTOP],
        isCard: true
      }
    ];

    this.arrayImageData = [
      {
        header: 'Graphic design',
        description: 'Great design makes you memorable. We deliver artwork that underscores your brand message and' +
          ' captures potential clients’ attention.',
        images: [this.CONSTANTES.BERRY_MOBILE, this.CONSTANTES.BERRY_DESKTOP]
      },
      {
        header: 'Photography',
        description: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
        images: [this.CONSTANTES.ORANGE_MOBILE, this.CONSTANTES.ORANGE_DESKTOP]
      }
    ];

    this.arrayDepoiments = [
      {
        image: this.CONSTANTES.CLIENT_1,
        feedback: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
        author: 'Emily R.',
        job: 'Marketing Director'
      },
      {
        image: this.CONSTANTES.CLIENT_3,
        feedback: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
        author: 'Thomas S.',
        job: 'Chief Operating Officer'
      },
      {
        image: this.CONSTANTES.CLIENT_2,
        feedback: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
        author: 'Jennie F.',
        job: 'Business Owner'
      }
    ]

    this.arrayImageSectionMobile = [
      this.CONSTANTES.MILK_MOBILE,
      this.CONSTANTES.ORANGE_GALERY_MOBILE,
      this.CONSTANTES.CONE_MOBILE,
      this.CONSTANTES.SUGAR_MOBILE,
    ];

    this.arrayImageSectionDesktop = [
      this.CONSTANTES.MILK_DESKTOP,
      this.CONSTANTES.ORANGE_GALERY_DESKTOP,
      this.CONSTANTES.CONE_DESKTOP,
      this.CONSTANTES.SUGAR_DESKTOP,
    ];
  }

}
