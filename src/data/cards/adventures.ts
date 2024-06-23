import {
  BenefitType,
  Card,
  CardDescriptionItemType,
  CardType,
  DescriptionContentType,
  DominionExpansions,
} from '@dominion/models/card.model';
import { SharedLabels } from '@dominion/models/shared.enum';

export enum AdventureCards {
  'Bridge Troll' = 'Bridge Troll',
  'Caravan Guard' = 'Caravan Guard',
  'Coin of the Realm' = 'Coin of the Realm',
  'Distant Lands' = 'Distant Lands',
  'Haunted Woods' = 'Haunted Woods',
  'Lost City' = 'Lost City',
  'Royal Carriage' = 'Royal Carriage',
  'Swamp Hag' = 'Swamp Hag',
  'Treasure Hunter' = 'Treasure Hunter',
  'Treasure Trove' = 'Treasure Trove',
  'Wine Merchant' = 'Wine Merchant',
  Amulet = 'Amulet',
  Artificer = 'Artificer',
  Champion = 'Champion',
  Disciple = 'Disciple',
  Dungeon = 'Dungeon',
  Duplicate = 'Duplicate',
  Fugitive = 'Fugitive',
  Gear = 'Gear',
  Giant = 'Giant',
  Guide = 'Guide',
  Hero = 'Hero',
  Hireling = 'Hireling',
  Magpie = 'Magpie',
  Messenger = 'Messenger',
  Miser = 'Miser',
  Page = 'Page',
  Peasant = 'Peasant',
  Port = 'Port',
  Ranger = 'Ranger',
  Ratcatcher = 'Ratcatcher',
  Raze = 'Raze',
  Relic = 'Relic',
  Soldier = 'Soldier',
  Storyteller = 'Storyteller',
  Teacher = 'Teacher',
  Transmogrify = 'Transmogrify',
  Warrior = 'Warrior',
}

export enum AdventureCardsDescriptions {
  Amulet_1 = 'Amulet_1',
  Amulet_2 = 'Amulet_2',
  Artificer_1 = 'Artificer_1',
  Artificer_2 = 'Artificer_2',
  Bridge_Troll_1 = 'Bridge_Troll_1',
  Bridge_Troll_2 = 'Bridge_Troll_2',
  Bridge_Troll_3 = 'Bridge_Troll_3',
  Bridge_Troll_4 = 'Bridge_Troll_4',
  Caravan_Guard_1 = 'Caravan_Guard_1',
  Caravan_Guard_2 = 'Caravan_Guard_2',
  Caravan_Guard_3 = 'Caravan_Guard_3',
  Champion_1 = 'Champion_1',
  Champion_2 = 'Champion_2',
  Coin_of_the_Realm_1 = 'Coin_of_the_Realm_1',
  Coin_of_the_Realm_2 = 'Coin_of_the_Realm_2',
  Disciple_1 = 'Disciple_1',
  Disciple_2 = 'Disciple_2',
  Distant_Lands_1 = 'Distant_Lands_1',
  Distant_Lands_2 = 'Distant_Lands_2',
  Distant_Lands_3 = 'Distant_Lands_3',
  Dungeon_1 = 'Dungeon_1',
  Dungeon_2 = 'Dungeon_2',
  Dungeon_3 = 'Dungeon_3',
  Duplicate_1 = 'Duplicate_1',
  Duplicate_2 = 'Duplicate_2',
  Fugitive_1 = 'Fugitive_1',
  Fugitive_2 = 'Fugitive_2',
  Gear_1 = 'Gear_1',
  Giant_1 = 'Giant_1',
  Giant_2 = 'Giant_2',
  Giant_3 = 'Giant_3',
  Giant_4 = 'Giant_4',
  Giant_5 = 'Giant_5',
  Guide_1 = 'Guide_1',
  Haunted_Woods_1 = 'Haunted_Woods_1',
  Haunted_Woods_2 = 'Haunted_Woods_2',
  Haunted_Woods_3 = 'Haunted_Woods_3',
  Hero_1 = 'Hero_1',
  Hero_2 = 'Hero_2',
  HireLing_1 = 'HireLing_1',
  Lost_City_1 = 'Lost_City_1',
  Magpie_1 = 'Magpie_1',
  Messenger_1 = 'Messenger_1',
  Messenger_2 = 'Messenger_2',
  Messenger_3 = 'Messenger_3',
  Miser_1 = 'Miser_1',
  Miser_2 = 'Miser_2',
  Page_1 = 'Page_1',
  Peasant_1 = 'Peasant_1',
  Port_1 = 'Port_1',
  Ranger_1 = 'Ranger_1',
  Ranger_2 = 'Ranger_2',
  Ratcatcher_1 = 'Ratcatcher_1',
  Raze_1 = 'Raze_1',
  Raze_2 = 'Raze_2',
  Relic_1 = 'Relic_1',
  Royal_Carriage_1 = 'Royal_Carriage_1',
  Soldier_1 = 'Soldier_1',
  Soldier_2 = 'Soldier_2',
  Soldier_3 = 'Soldier_3',
  Storyteller_1 = 'Storyteller_1',
  Storyteller_2 = 'Storyteller_2',
  Storyteller_3 = 'Storyteller_3',
  Storyteller_4 = 'Storyteller_4',
  Storyteller_5 = 'Storyteller_5',
  Storyteller_6 = 'Storyteller_6',
  Storyteller_7 = 'Storyteller_7',
  Swamp_Hag_1 = 'Swamp_Hag_1',
  Swamp_Hag_2 = 'Swamp_Hag_2',
  Teacher_1 = 'Teacher_1',
  Teacher_2 = 'Teacher_2',
  Transmogrify_1 = 'Transmogrify_1',
  Transmogrify_2 = 'Transmogrify_2',
  Treasure_Hunter_1 = 'Treasure_Hunter_1',
  Treasure_Hunter_2 = 'Treasure_Hunter_2',
  Treasure_Trove_1 = 'Treasure_Trove_1',
  Warrior_1 = 'Warrior_1',
  Warrior_2 = 'Warrior_2',
  Warrior_3 = 'Warrior_3',
  Warrior_4 = 'Warrior_4',
  Wine_Merchant_1 = 'Wine_Merchant_1',
  Wine_Merchant_2 = 'Wine_Merchant_2',
}

export const cards: Card[] = [
  {
    name: AdventureCards['Bridge Troll'],
    cost: 5,
    type: CardType.actionDurationAttack,
    imagePath: 'img/cards/art/adventures/bridge-troll.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Bridge_Troll_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Bridge_Troll_2 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Bridge_Troll_3 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Bridge_Troll_4 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Caravan Guard'],
    cost: 3,
    type: CardType.actionDurationReaction,
    imagePath: 'img/cards/art/adventures/caravan-guard.webp',
    expansion: DominionExpansions.Adventures,
    titleFontSizePx: 8,
    benefitFontSizePx: 8,
    descriptionFontSizePx: 6,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Caravan_Guard_1 },
          { type: DescriptionContentType.treasure, content: 1 },
        ],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Caravan_Guard_2 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Caravan_Guard_3 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Coin of the Realm'],
    cost: 2,
    type: CardType.treasureReserve,
    imagePath: 'img/cards/art/adventures/coin-of-the-realm.webp',
    expansion: DominionExpansions.Adventures,
    titleFontSizePx: 6,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 1, removeSymbol: true } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Coin_of_the_Realm_1 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Coin_of_the_Realm_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Distant Lands'],
    cost: 5,
    type: CardType.actionReserveVictory,
    imagePath: 'img/cards/art/adventures/distant-lands.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Distant_Lands_1 },
          { type: DescriptionContentType.victory, content: 4 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Distant_Lands_2 },
          { type: DescriptionContentType.victory, content: 0 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Distant_Lands_3 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Haunted Woods'],
    cost: 5,
    type: CardType.actionDurationAttack,
    imagePath: 'img/cards/art/adventures/haunted-woods.webp',
    expansion: DominionExpansions.Adventures,
    titleFontSizePx: 8,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Haunted_Woods_1 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Haunted_Woods_2 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Haunted_Woods_3 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Lost City'],
    cost: 5,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/lost-city.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 2 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 2 } },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Lost_City_1 }],
      },
    ],
  },
  {
    name: AdventureCards['Royal Carriage'],
    cost: 5,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/royal-carriage.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Royal_Carriage_1 }],
      },
    ],
  },
  {
    name: AdventureCards['Swamp Hag'],
    cost: 5,
    type: CardType.actionDurationAttack,
    imagePath: 'img/cards/art/adventures/swamp-hag.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Swamp_Hag_1 },
          { type: DescriptionContentType.treasure, content: 3 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Swamp_Hag_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Treasure Hunter'],
    cost: 3,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/treasure-hunter.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    titleFontSizePx: 8,
    benefitFontSizePx: 7,
    descriptionFontSizePx: 5,
    description: [
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
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Treasure_Hunter_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          {
            type: DescriptionContentType.label,
            content: AdventureCardsDescriptions.Treasure_Hunter_2,
            breakLine: true,
          },
          { type: DescriptionContentType.labelItalic, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards['Treasure Trove'],
    cost: 5,
    type: CardType.treasure,
    imagePath: 'img/cards/art/adventures/treasure-trove.webp',
    expansion: DominionExpansions.Adventures,
    titleFontSizePx: 9,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 1, removeSymbol: true } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Treasure_Trove_1 }],
      },
    ],
  },
  {
    name: AdventureCards['Wine Merchant'],
    cost: 5,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/wine-merchant.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 7,
    benefitFontSizePx: 8,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.buy, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 4 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Wine_Merchant_1 },
          { type: DescriptionContentType.treasure, content: 2 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Wine_Merchant_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Amulet,
    cost: 3,
    type: CardType.actionDuration,
    imagePath: 'img/cards/art/adventures/amulet.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Amulet_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Amulet_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Artificer,
    cost: 5,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/artificer.webp',
    expansion: DominionExpansions.Adventures,
    benefitFontSizePx: 7,
    descriptionFontSizePx: 6,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Artificer_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Artificer_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Champion,
    cost: 6,
    type: CardType.actionDuration,
    imagePath: 'img/cards/art/adventures/champion.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    benefitFontSizePx: 8,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Champion_1 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Champion_2, breakLine: true },
          { type: DescriptionContentType.labelItalic, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Disciple,
    cost: 5,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/disciple.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    descriptionFontSizePx: 7,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Disciple_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Disciple_2, breakLine: true },
          { type: DescriptionContentType.labelItalic, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Dungeon,
    cost: 3,
    type: CardType.actionDuration,
    imagePath: 'img/cards/art/adventures/dungeon.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Dungeon_1 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Dungeon_2 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Dungeon_3 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Duplicate,
    cost: 4,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/duplicate.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Duplicate_1 },
          { type: DescriptionContentType.treasure, content: 6 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Duplicate_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Fugitive,
    cost: 4,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/fugitive.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 2 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Fugitive_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Fugitive_2, breakLine: true },
          { type: DescriptionContentType.label, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Gear,
    cost: 3,
    type: CardType.actionDuration,
    imagePath: 'img/cards/art/adventures/gear.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 2 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Gear_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Giant,
    cost: 5,
    type: CardType.actionAttack,
    imagePath: 'img/cards/art/adventures/giant.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 6,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Giant_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Giant_2 },
          { type: DescriptionContentType.treasure, content: 5 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Giant_3 },
          { type: DescriptionContentType.treasure, content: 3 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Giant_4 },
          { type: DescriptionContentType.treasure, content: 6 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Giant_5 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Guide,
    cost: 3,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/guide.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Guide_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Hero,
    cost: 5,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/hero.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 2 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Hero_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Hero_2, breakLine: true },
          { type: DescriptionContentType.label, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Hireling,
    cost: 6,
    type: CardType.actionDuration,
    imagePath: 'img/cards/art/adventures/hireling.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.HireLing_1 }],
      },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
    ],
  },
  {
    name: AdventureCards.Magpie,
    cost: 4,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/magpie.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Magpie_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Messenger,
    cost: 4,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/messenger.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 5,
    benefitFontSizePx: 6,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.buy, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 2 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Messenger_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Messenger_2 },
          { type: DescriptionContentType.treasure, content: 4 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Messenger_3 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Miser,
    cost: 4,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/miser.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Miser_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Miser_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Page,
    cost: 2,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/page.webp',
    expansion: DominionExpansions.Adventures,
    upgradeCards: [
      AdventureCards['Treasure Hunter'],
      AdventureCards.Warrior,
      AdventureCards.Hero,
      AdventureCards.Champion,
    ],
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Page_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Peasant,
    cost: 2,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/peasant.webp',
    expansion: DominionExpansions.Adventures,
    upgradeCards: [AdventureCards.Soldier, AdventureCards.Fugitive, AdventureCards.Disciple, AdventureCards.Teacher],
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.buy, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Peasant_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Port,
    cost: 4,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/port.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 2 } },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Port_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Ranger,
    cost: 4,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/ranger.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.buy, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Ranger_1 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Ranger_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Ratcatcher,
    cost: 2,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/ratcatcher.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 1 } },
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Ratcatcher_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Raze,
    cost: 2,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/raze.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Raze_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Raze_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Relic,
    cost: 5,
    type: CardType.treasureAttack,
    imagePath: 'img/cards/art/adventures/relic.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 2, removeSymbol: true } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: AdventureCardsDescriptions.Relic_1 }],
      },
    ],
  },
  {
    name: AdventureCards.Soldier,
    cost: 3,
    type: CardType.actionTraveller,
    imagePath: 'img/cards/art/adventures/soldier.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    descriptionFontSizePx: 6,
    benefitFontSizePx: 8,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.treasure, amount: 2 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Soldier_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Soldier_2 },
        ],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Soldier_3, breakLine: true },
          { type: DescriptionContentType.label, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Storyteller,
    cost: 5,
    type: CardType.action,
    imagePath: 'img/cards/art/adventures/storyteller.webp',
    expansion: DominionExpansions.Adventures,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Storyteller_1 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Storyteller_2 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Storyteller_3 },
          { type: DescriptionContentType.treasure, content: 0 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Storyteller_4 },
          { type: DescriptionContentType.labelBold, content: AdventureCardsDescriptions.Storyteller_5 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Storyteller_6 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Storyteller_7 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Teacher,
    cost: 6,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/teacher.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    descriptionFontSizePx: 6,
    description: [
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Teacher_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Teacher_2, breakLine: true },
          { type: DescriptionContentType.labelItalic, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Transmogrify,
    cost: 4,
    type: CardType.actionReserve,
    imagePath: 'img/cards/art/adventures/transmogrify.webp',
    expansion: DominionExpansions.Adventures,
    descriptionFontSizePx: 7,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.action, amount: 1 } },
      {
        type: CardDescriptionItemType.description,
        content: [{ type: DescriptionContentType.label, content: SharedLabels.Reserve_1 }],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Transmogrify_1 },
          { type: DescriptionContentType.treasure, content: 1 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Transmogrify_2 },
        ],
      },
    ],
  },
  {
    name: AdventureCards.Warrior,
    cost: 4,
    type: CardType.actionAttackTraveller,
    imagePath: 'img/cards/art/adventures/warrior.webp',
    expansion: DominionExpansions.Adventures,
    excludedFromSupply: true,
    benefitFontSizePx: 7,
    descriptionFontSizePx: 5,
    description: [
      { type: CardDescriptionItemType.benefit, content: { type: BenefitType.card, amount: 2 } },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Warrior_1 },
          { type: DescriptionContentType.treasure, content: 3 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Warrior_2 },
          { type: DescriptionContentType.treasure, content: 4 },
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Warrior_3 },
        ],
      },
      { type: CardDescriptionItemType.divider },
      {
        type: CardDescriptionItemType.description,
        content: [
          { type: DescriptionContentType.label, content: AdventureCardsDescriptions.Warrior_4, breakLine: true },
          { type: DescriptionContentType.label, content: SharedLabels.Traveller_1 },
        ],
      },
    ],
  },
];
