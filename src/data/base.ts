import {
  BenefitType,
  Card,
  CardDescriptionItemType,
  CardType,
  DescriptionContentType,
  DominionExpansions,
} from '@dominion/models/card.model';

export const cards: Card[] = [
  {
    name: 'Copper',
    cost: 0,
    type: CardType.treasureBasic,
    imagePath: '/img/cards/art/base/copper.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 1 },
      },
    ],
  },
  {
    name: 'Curse',
    cost: 0,
    type: CardType.curseBasic,
    imagePath: '/img/cards/art/base/curse.webp',
    expansion: DominionExpansions.base,
  },
  {
    name: 'Cellar',
    cost: 2,
    type: CardType.action,
    imagePath: '/img/cards/art/base/cellar.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Discard any number of cards.', breakLine: true },
          { type: DescriptionContentType.labelBold, content: '+1 Card ' },
          { type: DescriptionContentType.label, content: 'per card discarded.' },
        ],
      },
    ],
  },
  {
    name: 'Estate',
    cost: 0,
    type: CardType.victoryBasic,
    imagePath: '/img/cards/art/base/estate.webp',
    expansion: DominionExpansions.base,
  },
  {
    name: 'Chapel',
    cost: 2,
    type: CardType.action,
    imagePath: '/img/cards/art/base/chapel.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Trash up to 4 cards from', breakLine: true },
          { type: DescriptionContentType.label, content: 'your hand.' },
        ],
      },
    ],
  },
  {
    name: 'Moat',
    cost: 2,
    type: CardType.actionReaction,
    imagePath: '/img/cards/art/base/moat.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 2 },
      },
      {
        type: CardDescriptionItemType.divider,
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'When another player plays an', breakLine: true },
          { type: DescriptionContentType.label, content: 'Attack card, you may first', breakLine: true },
          { type: DescriptionContentType.label, content: 'reveal this from your hand, to', breakLine: true },
          { type: DescriptionContentType.label, content: 'be unaffected by it.' },
        ],
      },
    ],
  },
  {
    name: 'Harbinger',
    cost: 3,
    type: CardType.action,
    imagePath: '/img/cards/art/base/harbinger.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Look through your discard pile.', breakLine: true },
          { type: DescriptionContentType.label, content: 'You may put a card from it', breakLine: true },
          { type: DescriptionContentType.label, content: 'onto your deck.' },
        ],
      },
    ],
  },
  {
    name: 'Merchant',
    cost: 3,
    type: CardType.action,
    imagePath: '/img/cards/art/base/merchant.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'The first time you play a Silver', breakLine: true },
          { type: DescriptionContentType.label, content: 'this turn,+' },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: '.' },
        ],
      },
    ],
  },
  {
    name: 'Silver',
    cost: 3,
    type: CardType.treasureBasic,
    imagePath: '/img/cards/art/base/silver.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 2 },
      },
    ],
  },
  {
    name: 'Vassal',
    cost: 3,
    type: CardType.action,
    imagePath: '/img/cards/art/base/vassal.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 2 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Discard the top card of your', breakLine: true },
          { type: DescriptionContentType.label, content: `deck. If it's an Action card,`, breakLine: true },
          { type: DescriptionContentType.label, content: 'you may play it.' },
        ],
      },
    ],
  },
  {
    name: 'Workshop',
    cost: 3,
    type: CardType.action,
    imagePath: '/img/cards/art/base/workshop.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Gain a card costing up to ' },
          { type: DescriptionContentType.treasure, content: 4 },
          { type: DescriptionContentType.label, content: '.' },
        ],
      },
    ],
  },
  {
    name: 'Bureaucrat',
    cost: 4,
    type: CardType.actionAttack,
    imagePath: '/img/cards/art/base/bureaucrat.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Gain a Silver onto your deck.', breakLine: true },
          { type: DescriptionContentType.label, content: 'Each other player reveals a', breakLine: true },
          { type: DescriptionContentType.label, content: 'Victory card from their hand', breakLine: true },
          { type: DescriptionContentType.label, content: 'and puts it onto their deck (or', breakLine: true },
          { type: DescriptionContentType.label, content: 'reveals a hand with', breakLine: true },
          { type: DescriptionContentType.label, content: 'no Victory cards).' },
        ],
      },
    ],
  },
  {
    name: 'Gardens',
    cost: 4,
    type: CardType.victory,
    imagePath: '/img/cards/art/base/gardens.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Worth ' },
          { type: DescriptionContentType.victory, content: 1 },
          { type: DescriptionContentType.label, content: ' per 10 cards you', breakLine: true },
          { type: DescriptionContentType.label, content: 'have (round down).' },
        ],
      },
    ],
  },
  {
    name: 'Militia',
    cost: 4,
    type: CardType.actionAttack,
    imagePath: '/img/cards/art/base/militia.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 2 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Each other player discards ', breakLine: true },
          { type: DescriptionContentType.label, content: 'down to 3 cards in hand.' },
        ],
      },
    ],
  },
  {
    name: 'Moneylender',
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/moneylender.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'You may trash a Copper from', breakLine: true },
          { type: DescriptionContentType.label, content: 'your hand for +' },
          { type: DescriptionContentType.treasure, content: 3 },
          { type: DescriptionContentType.label, content: '.' },
        ],
      },
    ],
  },
  {
    name: 'Poacher',
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/poacher.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 1 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Discard a card per empty', breakLine: true },
          { type: DescriptionContentType.label, content: 'Supply pile.' },
        ],
      },
    ],
  },
  {
    name: 'Remodel',
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/remodel.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Trash a card from your hand', breakLine: true },
          { type: DescriptionContentType.label, content: 'Gain a card costing up to ' },
          { type: DescriptionContentType.treasure, content: 2, breakLine: true },
          { type: DescriptionContentType.label, content: 'more than it.' },
        ],
      },
    ],
  },
  {
    name: 'Throne Room',
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/throne-room.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'You may play an Action card', breakLine: true },
          { type: DescriptionContentType.label, content: 'from your hand twice' },
        ],
      },
    ],
  },
  {
    name: 'Bandit',
    cost: 4,
    type: CardType.actionAttack,
    imagePath: '/img/cards/art/base/bandit.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Gain a Gold.', breakLine: true },
          { type: DescriptionContentType.label, content: 'Each other player reveals the', breakLine: true },
          { type: DescriptionContentType.label, content: 'top 2 cards of their deck,', breakLine: true },
          { type: DescriptionContentType.label, content: 'trashed a revealed Treasure', breakLine: true },
          { type: DescriptionContentType.label, content: 'other than Copper, and', breakLine: true },
          { type: DescriptionContentType.label, content: 'discards the rest.' },
        ],
      },
    ],
  },
  {
    name: 'Council Room',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/council-room.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 4 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.buy, amount: 1 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: 'Each other player draws a card.' }],
      },
    ],
  },
  {
    name: 'Duchy',
    cost: 5,
    type: CardType.victoryBasic,
    imagePath: '/img/cards/art/base/duchy.webp',
    expansion: DominionExpansions.base,
  },
  {
    name: 'Festival',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/festival.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 2 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.buy, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 2 },
      },
    ],
  },
  {
    name: 'Market',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/market.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.buy, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 1 },
      },
    ],
  },
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
    name: 'Library',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/library.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Draw until you have 7 cards in', breakLine: true },
          { type: DescriptionContentType.label, content: 'hand, skipping any Action', breakLine: true },
          { type: DescriptionContentType.label, content: 'cards you choose to; set those', breakLine: true },
          { type: DescriptionContentType.label, content: 'aside, discarding them', breakLine: true },
          { type: DescriptionContentType.label, content: 'afterwards.' },
        ],
      },
    ],
  },
  {
    name: 'Mine',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/mine.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'You may trash a Treasure from', breakLine: true },
          { type: DescriptionContentType.label, content: 'your hand. Gain a Treasure to', breakLine: true },
          { type: DescriptionContentType.label, content: 'your hand costing up to' },
          { type: DescriptionContentType.treasure, content: 3, breakLine: true },
          { type: DescriptionContentType.label, content: 'more than it.' },
        ],
      },
    ],
  },
  {
    name: 'Sentry',
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/sentry.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 1 },
      },
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.action, amount: 1 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Look at the top 2 cards of your', breakLine: true },
          { type: DescriptionContentType.label, content: 'deck. Trash and/or discard any', breakLine: true },
          { type: DescriptionContentType.label, content: 'number of them. Put the rest', breakLine: true },
          { type: DescriptionContentType.label, content: 'back on top in any order.' },
        ],
      },
    ],
  },
  {
    name: 'Witch',
    cost: 5,
    type: CardType.actionAttack,
    imagePath: '/img/cards/art/base/witch.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.card, amount: 2 },
      },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: 'Each player gains a Curse.' }],
      },
    ],
  },
  {
    name: 'Artisan',
    cost: 6,
    type: CardType.action,
    imagePath: '/img/cards/art/base/artisan.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: 'Gain a card to your hand', breakLine: true },
          { type: DescriptionContentType.label, content: 'costing up to ' },
          { type: DescriptionContentType.treasure, content: 5 },
          { type: DescriptionContentType.label, content: '.', breakLine: true },
          { type: DescriptionContentType.label, content: 'Put a card from your hand', breakLine: true },
          { type: DescriptionContentType.label, content: 'onto your deck' },
        ],
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
  {
    name: 'Gold',
    cost: 6,
    type: CardType.treasureBasic,
    imagePath: '/img/cards/art/base/gold.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.benefit,
        content: { type: BenefitType.treasure, amount: 3 },
      },
    ],
  },
  {
    name: 'Province',
    cost: 8,
    type: CardType.victoryBasic,
    imagePath: '/img/cards/art/base/province.webp',
    expansion: DominionExpansions.base,
  },
];
