import { Component, OnInit } from '@angular/core';
import { Constantes } from "../utils/constantes";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  public nft: NFT;
  //
  constructor() {
    this.nft = new NFT('Jules Wyvern', 'Equilibrium #3429',
      'Our Equilibrium collection promotes balance and calm.', 0.041, 3);
  }

  ngOnInit(): void {
  }

}

export class NFT {
  public creator: string = '';
  public nameNft: string = '';
  public description: string = '';
  public value: number = 0;
  public releaseDate: number = 0;

  constructor(creator: string, nameFft: string, description: string, value: number, releaseDate: number) {
    this.creator = creator;
    this.nameNft = nameFft;
    this.description = description;
    this.value = value;
    this.releaseDate = releaseDate;
  }
}
