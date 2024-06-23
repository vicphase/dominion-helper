import { BenefitType, Card, CardDescriptionItemType, CardType, DominionExpansions } from '@dominion/models/card.model';

export enum StapleCards {
  Copper = 'Copper',
  Silver = 'Silver',
  Gold = 'Gold',
  Estate = 'Estate',
  Duchy = 'Duchy',
  Province = 'Province',
  Curse = 'Curse',
}

export const cards: Card[] = [
  {
    name: StapleCards.Copper,
    cost: 0,
    type: CardType.treasureBasic,
    imagePath: '/img/cards/art/base/copper.webp',
    expansion: DominionExpansions.Base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 1 },
      },
    ],
  },
  {
    name: StapleCards.Silver,
    cost: 3,
    type: CardType.treasureBasic,
    imagePath: '/img/cards/art/base/silver.webp',
    expansion: DominionExpansions.Base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 2 },
      },
    ],
  },
  {
    name: StapleCards.Gold,
    cost: 6,
    type: CardType.treasureBasic,
    imagePath: '/img/cards/art/base/gold.webp',
    expansion: DominionExpansions.Base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 3 },
      },
    ],
  },
  {
    name: StapleCards.Estate,
    cost: 0,
    type: CardType.victoryBasic,
    imagePath: '/img/cards/art/base/estate.webp',
    expansion: DominionExpansions.Base,
  },
  {
    name: StapleCards.Duchy,
    cost: 5,
    type: CardType.victoryBasic,
    imagePath: '/img/cards/art/base/duchy.webp',
    expansion: DominionExpansions.Base,
  },
  {
    name: StapleCards.Province,
    cost: 8,
    type: CardType.victoryBasic,
    imagePath: '/img/cards/art/base/province.webp',
    expansion: DominionExpansions.Base,
  },
  {
    name: StapleCards.Curse,
    cost: 0,
    type: CardType.curseBasic,
    imagePath: '/img/cards/art/base/curse.webp',
    expansion: DominionExpansions.Base,
  },
];
