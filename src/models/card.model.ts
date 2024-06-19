export interface Card {
  name: string;
  cost: number;
  type: CardType;
  imagePath: string;
  descriptionFontSize?: string;
  description?: CardDescription;
  expansion: DominionExpansions;
}

export enum DominionExpansions {
  base = 'base',
}

export type CardDescription = CardDescriptionItem[];

export interface CardDescriptionItem {
  type: CardDescriptionItemType;
  content?: DescriptionContent[] | BenefitContent;
}

export enum CardDescriptionItemType {
  treasure = 'treasure',
  victory = 'victory',
  benefit = 'benetif',
  description = 'description',
  divider = 'divider',
}

export interface DescriptionContent {
  type: DescriptionContentType;
  content: string | number;
  breakLine?: boolean;
}

export enum DescriptionContentType {
  label = 'label',
  labelBold = 'labelBold',
  victory = 'victory',
  treasure = 'treasure',
}

export interface BenefitContent {
  type: BenefitType;
  amount: number;
}

export enum BenefitType {
  card = 'card',
  action = 'action',
  buy = 'buy',
  treasure = 'treasure',
}

export type BenefitTypeLabel = { singular: string; plural: string };

export enum CardType {
  victory = 'victory',
  victoryBasic = 'victoryBasic',
  treasureBasic = 'treasureBasic',
  curseBasic = 'curseBasic',
  actionReaction = 'actionReaction',
  action = 'action',
  actionAttack = 'actionAttack',
}

export const cardBackgrounds: Record<CardType, string> = {
  [CardType.victory]: '/img/cards/template/victory.webp',
  [CardType.victoryBasic]: '/img/cards/template/victory-basic.webp',
  [CardType.treasureBasic]: '/img/cards/template/treasure-basic.webp',
  [CardType.curseBasic]: '/img/cards/template/curse-basic.webp',
  [CardType.actionReaction]: '/img/cards/template/action-reaction.webp',
  [CardType.action]: '/img/cards/template/action.webp',
  [CardType.actionAttack]: '/img/cards/template/action.webp',
};

export const expansionLogos: Record<DominionExpansions, string> = {
  [DominionExpansions.base]: '/img/elements/base.png',
};

export enum CardSize {
  Normal = 'Normal',
  Large = 'Large',
}
