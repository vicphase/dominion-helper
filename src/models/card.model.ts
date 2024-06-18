export interface Card {
  name: string;
  cost: number;
  type: CardType;
  imagePath: string;
  description: CardDescription;
  expansion: DominionExpansions;
}

export enum DominionExpansions {
  base = 'base',
}

export type CardDescription = CardDescriptionItem[];

export interface CardDescriptionItem {
  type: CardDescriptionItemType;
  content?: string | BenefitContent;
}

export enum CardDescriptionItemType {
  treasure = 'treasure',
  victory = 'victory',
  benefit = 'benetif',
  description = 'description',
  divider = 'divider',
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
  [CardType.victoryBasic]: '/img/cards/template/victor-basic.webp',
  [CardType.treasureBasic]: '/img/cards/template/treasure-basic.webp',
  [CardType.curseBasic]: '/img/cards/template/curse-basic.webp',
  [CardType.actionReaction]: '/img/cards/template/action-reaction.webp',
  [CardType.action]: '/img/cards/template/action.webp',
  [CardType.actionAttack]: '/img/cards/template/action.webp',
};

export const cardTypeLabels: Record<CardType, string> = {
  [CardType.victory]: 'Victory',
  [CardType.victoryBasic]: 'Victory',
  [CardType.treasureBasic]: 'Treasure',
  [CardType.curseBasic]: 'Curse',
  [CardType.actionReaction]: 'Action - Reaction',
  [CardType.action]: 'Action',
  [CardType.actionAttack]: 'Action - Attack',
};

export const benefitTypeLabels: Record<BenefitType, BenefitTypeLabel> = {
  [BenefitType.action]: { singular: 'Action', plural: 'Actions' },
  [BenefitType.buy]: { singular: 'Buy', plural: 'Buy' },
  [BenefitType.card]: { singular: 'Card', plural: 'Cards' },
  [BenefitType.treasure]: { singular: 'Treasure', plural: 'Treasure' },
};

export const expansionLogos: Record<DominionExpansions, string> = {
  [DominionExpansions.base]: '/img/elements/base.png',
};
