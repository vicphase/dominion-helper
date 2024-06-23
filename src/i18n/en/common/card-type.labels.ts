import { CardType } from '@dominion/models/card.model';

export const cardTypeLabelsEn: Record<CardType, string> = {
  [CardType.action]: 'Action',
  [CardType.actionAttack]: 'Action - Attack',
  [CardType.actionAttackTraveller]: 'Action - Attack - Traveller',
  [CardType.actionDuration]: 'Action - Duration',
  [CardType.actionDurationAttack]: 'Action - Duration - Attack',
  [CardType.actionDurationReaction]: 'Action - Duration - Reaction',
  [CardType.actionReaction]: 'Action - Reaction',
  [CardType.actionReserve]: 'Action - Reserve',
  [CardType.actionReserveVictory]: 'Action - Reserve - Victory',
  [CardType.actionTraveller]: 'Action - Traveller',
  [CardType.curseBasic]: 'Curse',
  [CardType.treasureBasic]: 'Treasure',
  [CardType.treasure]: 'Treasure',
  [CardType.treasureAttack]: 'Treasure - Attack',
  [CardType.treasureReserve]: 'Treasure - Reserve',
  [CardType.victory]: 'Victory',
  [CardType.victoryBasic]: 'Victory',
};
