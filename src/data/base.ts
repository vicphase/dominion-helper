import {
  BenefitType,
  Card,
  CardDescriptionItemType,
  CardType,
  DescriptionContentType,
  DominionExpansions,
} from '@dominion/models/card.model';

export enum BaseCards {
  Artisan = 'Artisan',
  Bandit = 'Bandit',
  Bureaucrat = 'Bureaucrat',
  Cellar = 'Cellar',
  Chapel = 'Chapel',
  'Council Room' = 'Council Room',
  Festival = 'Festival',
  Gardens = 'Gardens',
  Harbinger = 'Harbinger',
  Laboratory = 'Laboratory',
  Library = 'Library',
  Market = 'Market',
  Merchant = 'Merchant',
  Militia = 'Militia',
  Mine = 'Mine',
  Moat = 'Moat',
  Moneylender = 'Moneylender',
  Poacher = 'Poacher',
  Remodel = 'Remodel',
  Sentry = 'Sentry',
  Smithy = 'Smithy',
  'Throne Room' = 'Throne Room',
  Vassal = 'Vassal',
  Village = 'Village',
  Witch = 'Witch',
  Workshop = 'Workshop',
}

export enum BaseCardsDescriptions {
  Artisan_1 = 'Artisan_1',
  Artisan_2 = 'Artisan_2',
  Artisan_3 = 'Artisan_3',
  Artisan_4 = 'Artisan_4',
  Artisan_5 = 'Artisan_5',
  Bandit_1 = 'Bandit_1',
  Bandit_2 = 'Bandit_2',
  Bandit_3 = 'Bandit_3',
  Bandit_4 = 'Bandit_4',
  Bandit_5 = 'Bandit_5',
  Bandit_6 = 'Bandit_6',
  Bureaucrat_1 = 'Bureaucrat_1',
  Bureaucrat_2 = 'Bureaucrat_2',
  Bureaucrat_3 = 'Bureaucrat_3',
  Bureaucrat_4 = 'Bureaucrat_4',
  Bureaucrat_5 = 'Bureaucrat_5',
  Bureaucrat_6 = 'Bureaucrat_6',
  Cellar_1 = 'Cellar_1',
  Cellar_2 = 'Cellar_2',
  Cellar_3 = 'Cellar_3',
  Chapel_1 = 'Chapel_1',
  Chapel_2 = 'Chapel_2',
  Council_Room_1 = 'Council_Room_1',
  Gardens_1 = 'Gardens_1',
  Gardens_2 = 'Gardens_2',
  Gardens_3 = 'Gardens_3',
  Harbinger_1 = 'Harbinger_1',
  Harbinger_2 = 'Harbinger_2',
  Harbinger_3 = 'Harbinger_3',
  Library_1 = 'Library_1',
  Library_2 = 'Library_2',
  Library_3 = 'Library_3',
  Library_4 = 'Library_4',
  Library_5 = 'Library_5',
  Merchant_1 = 'Merchant_1',
  Merchant_2 = 'Merchant_2',
  Merchant_3 = 'Merchant_3',
  Militia_1 = 'Militia_1',
  Militia_2 = 'Militia_2',
  Mine_1 = 'Mine_1',
  Mine_2 = 'Mine_2',
  Mine_3 = 'Mine_3',
  Mine_4 = 'Mine_4',
  Moat_1 = 'Moat_1',
  Moat_2 = 'Moat_2',
  Moat_3 = 'Moat_3',
  Moat_4 = 'Moat_4',
  Moneylender_1 = 'Moneylender_1',
  Moneylender_2 = 'Moneylender_2',
  Moneylender_3 = 'Moneylender_3',
  Poacher_1 = 'Poacher_1',
  Poacher_2 = 'Poacher_2',
  Remodel_1 = 'Remodel_1',
  Remodel_2 = 'Remodel_2',
  Remodel_3 = 'Remodel_3',
  Sentry_1 = 'Sentry_1',
  Sentry_2 = 'Sentry_2',
  Sentry_3 = 'Sentry_3',
  Sentry_4 = 'Sentry_4',
  Throne_Room_1 = 'Throne_Room_1',
  Throne_Room_2 = 'Throne_Room_2',
  Vassal_1 = 'Vassal_1',
  Vassal_2 = 'Vassal_2',
  Vassal_3 = 'Vassal_3',
  Witch_1 = 'Witch_1',
  Workshop_1 = 'Workshop_1',
  Workshop_2 = 'Workshop_2',
}

export const cards: Card[] = [
  {
    name: BaseCards.Artisan,
    cost: 6,
    type: CardType.action,
    imagePath: '/img/cards/art/base/artisan.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Artisan_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Artisan_2 },
          { type: DescriptionContentType.treasure, content: 5 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Artisan_3, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Artisan_4, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Artisan_5 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Bandit,
    cost: 4,
    type: CardType.actionAttack,
    imagePath: '/img/cards/art/base/bandit.webp',
    expansion: DominionExpansions.base,
    descriptionFontSize: '7px',
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bandit_1 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bandit_2 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bandit_3 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bandit_4 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bandit_5 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bandit_6 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Bureaucrat,
    cost: 4,
    type: CardType.actionAttack,
    imagePath: '/img/cards/art/base/bureaucrat.webp',
    expansion: DominionExpansions.base,
    descriptionFontSize: '7px',
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bureaucrat_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bureaucrat_2, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bureaucrat_3, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bureaucrat_4, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bureaucrat_5, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Bureaucrat_6 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Cellar,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Cellar_1 },
          { type: DescriptionContentType.labelBold, content: BaseCardsDescriptions.Cellar_2 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Cellar_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Chapel,
    cost: 2,
    type: CardType.action,
    imagePath: '/img/cards/art/base/chapel.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Chapel_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Chapel_2 },
        ],
      },
    ],
  },
  {
    name: BaseCards['Council Room'],
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
        content: [{ type: DescriptionContentType.label, content: BaseCardsDescriptions.Council_Room_1 }],
      },
    ],
  },
  {
    name: BaseCards.Festival,
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
    name: BaseCards.Gardens,
    cost: 4,
    type: CardType.victory,
    imagePath: '/img/cards/art/base/gardens.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Gardens_1 },
          { type: DescriptionContentType.victory, content: 1 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Gardens_2 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Gardens_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Harbinger,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Harbinger_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Harbinger_2, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Harbinger_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Laboratory,
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
    name: BaseCards.Library,
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/library.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Library_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Library_2, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Library_3, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Library_4, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Library_5 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Market,
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
    name: BaseCards.Merchant,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Merchant_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Merchant_2 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Merchant_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Militia,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Militia_1 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Militia_2 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Mine,
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/mine.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Mine_1 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Mine_2 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Mine_3 },
          { type: DescriptionContentType.treasure, content: 3 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Mine_4 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Moat,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moat_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moat_2, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moat_3, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moat_4 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Moneylender,
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/moneylender.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moneylender_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moneylender_2 },
          { type: DescriptionContentType.treasure, content: 3 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Moneylender_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Poacher,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Poacher_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Poacher_2 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Remodel,
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/remodel.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Remodel_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Remodel_2 },
          { type: DescriptionContentType.treasure, content: 2 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Remodel_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Sentry,
    cost: 5,
    type: CardType.action,
    imagePath: '/img/cards/art/base/sentry.webp',
    expansion: DominionExpansions.base,
    descriptionFontSize: '7px',
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Sentry_1 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Sentry_2 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Sentry_3 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Sentry_4 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Smithy,
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
    name: BaseCards['Throne Room'],
    cost: 4,
    type: CardType.action,
    imagePath: '/img/cards/art/base/throne-room.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Throne_Room_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Throne_Room_2 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Vassal,
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
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Vassal_1, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Vassal_2, breakLine: true },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Vassal_3 },
        ],
      },
    ],
  },
  {
    name: BaseCards.Village,
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
    name: BaseCards.Witch,
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
        content: [{ type: DescriptionContentType.label, content: BaseCardsDescriptions.Witch_1 }],
      },
    ],
  },
  {
    name: BaseCards.Workshop,
    cost: 3,
    type: CardType.action,
    imagePath: '/img/cards/art/base/workshop.webp',
    expansion: DominionExpansions.base,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Workshop_1 },
          { type: DescriptionContentType.treasure, content: 4 },
          { type: DescriptionContentType.label, content: BaseCardsDescriptions.Workshop_2 },
        ],
      },
    ],
  },
];
