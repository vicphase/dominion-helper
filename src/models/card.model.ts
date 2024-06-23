import { AdventureCards } from '@dominion/data/cards/adventures';
import { BaseCards } from '@dominion/data/cards/base';
import { StapleCards } from '@dominion/data/cards/staple';

export interface Card {
  name: string;
  cost: number;
  type: CardType;
  imagePath: string;
  descriptionFontSizePx?: number;
  benefitFontSizePx?: number;
  titleFontSizePx?: number;
  excludedFromSupply?: boolean;
  upgradeCards?: DominionCards[];
  description?: CardDescription;
  expansion: DominionExpansions;
}

export enum DominionExpansions {
  Adventures = 'Adventures',
  Base = 'Base',
}

export type CardDescription = CardDescriptionItem[];

export interface CardDescriptionItem {
  type: CardDescriptionItemType;
  content?: DescriptionContent[] | BenefitContent;
}

export enum CardDescriptionItemType {
  benefit = 'benetif',
  description = 'description',
  divider = 'divider',
  treasure = 'treasure',
  victory = 'victory',
}

export interface DescriptionContent {
  type: DescriptionContentType;
  content: string | number;
  breakLine?: boolean;
}

export enum DescriptionContentType {
  label = 'label',
  labelBold = 'labelBold',
  labelItalic = 'labelItalic',
  treasure = 'treasure',
  victory = 'victory',
}

export interface BenefitContent {
  type: BenefitType;
  amount: number;
  removeSymbol?: boolean;
}

export enum BenefitType {
  action = 'action',
  buy = 'buy',
  card = 'card',
  treasure = 'treasure',
}

export type BenefitTypeLabel = { singular: string; plural: string };

export enum CardType {
  action = 'action',
  actionAttack = 'actionAttack',
  actionAttackTraveller = 'actionAttackTraveller',
  actionDuration = 'actionDuration',
  actionDurationAttack = 'actionDurationAttack',
  actionDurationReaction = 'actionDurationReaction',
  actionReaction = 'actionReaction',
  actionReserve = 'actionReserve',
  actionReserveVictory = 'actionReserveVictory',
  actionTraveller = 'actionTraveller',
  curseBasic = 'curseBasic',
  treasure = 'treasure',
  treasureAttack = 'treasureAttack',
  treasureBasic = 'treasureBasic',
  treasureReserve = 'treasureReserve',
  victory = 'victory',
  victoryBasic = 'victoryBasic',
}

export const cardBackgrounds: Record<CardType, string> = {
  [CardType.action]: '/img/cards/template/action.webp',
  [CardType.actionAttack]: '/img/cards/template/action.webp',
  [CardType.actionAttackTraveller]: '/img/cards/template/action-traveller.webp',
  [CardType.actionDuration]: '/img/cards/template/action-duration.webp',
  [CardType.actionDurationAttack]: '/img/cards/template/action-duration.webp',
  [CardType.actionDurationReaction]: '/img/cards/template/action-duration-reaction.webp',
  [CardType.actionReaction]: '/img/cards/template/action-reaction.webp',
  [CardType.actionReserve]: '/img/cards/template/action-reserve.webp',
  [CardType.actionReserveVictory]: '/img/cards/template/action-reserve-victory.webp',
  [CardType.actionTraveller]: '/img/cards/template/action-traveller.webp',
  [CardType.curseBasic]: '/img/cards/template/curse-basic.webp',
  [CardType.treasureBasic]: '/img/cards/template/treasure-basic.webp',
  [CardType.treasure]: '/img/cards/template/treasure.webp',
  [CardType.treasureAttack]: '/img/cards/template/treasure.webp',
  [CardType.treasureReserve]: '/img/cards/template/treasure-reserve.webp',
  [CardType.victory]: '/img/cards/template/victory.webp',
  [CardType.victoryBasic]: '/img/cards/template/victory-basic.webp',
};

export const expansionLogos: Record<DominionExpansions, string> = {
  [DominionExpansions.Adventures]: '/img/elements/adventures.png',
  [DominionExpansions.Base]: '/img/elements/base.png',
};

export enum CardSize {
  Normal = 'Normal',
  Large = 'Large',
}

export type DominionCards = StapleCards | BaseCards | AdventureCards;
