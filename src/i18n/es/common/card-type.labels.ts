import { CardType } from '@dominion/models/card.model';

export const cardTypeLabelsEs: Record<CardType, string> = {
  [CardType.victory]: 'Victoria',
  [CardType.victoryBasic]: 'Victoria',
  [CardType.treasureBasic]: 'Tesoro',
  [CardType.curseBasic]: 'Maldición',
  [CardType.actionReaction]: 'Acción - Reacción',
  [CardType.action]: 'Acción',
  [CardType.actionAttack]: 'Acción - Ataque',
};
