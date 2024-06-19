import { CardType } from '@dominion/models/card.model';

export const cardTypeLabelsEn: Record<CardType, string> = {
  [CardType.victory]: 'Victory',
  [CardType.victoryBasic]: 'Victory',
  [CardType.treasureBasic]: 'Treasure',
  [CardType.curseBasic]: 'Curse',
  [CardType.actionReaction]: 'Action - Reaction',
  [CardType.action]: 'Action',
  [CardType.actionAttack]: 'Action - Attack',
};
