import { BenefitType, Card, CardDescriptionItemType, CardType, DominionExpansions } from '@dominion/models/card.model';

export const cards: Card[] = [
  {
    name: 'Laboratory',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/laboratory.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 2 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
    ],
  },
  {
    name: 'Smithy',
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/smithy.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 3 },
      },
    ],
  },
  {
    name: 'Village',
    cost: 3,
    type: CardType.action,
    imagePath: '/img/cards/art/base/village.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 2 },
      },
    ],
  },
];
