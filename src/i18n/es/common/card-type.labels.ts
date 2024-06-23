import { CardType } from '@dominion/models/card.model';

export const cardTypeLabelsEs: Record<CardType, string> = {
  [CardType.action]: 'Acción',
  [CardType.actionAttack]: 'Acción - Ataque',
  [CardType.actionAttackTraveller]: 'Acción - Ataque - Viajero',
  [CardType.actionDuration]: 'Acción - Duración',
  [CardType.actionDurationAttack]: 'Acción - Duración - Ataque',
  [CardType.actionDurationReaction]: 'Acción - Duración - Reacción',
  [CardType.actionReaction]: 'Acción - Reacción',
  [CardType.actionReserve]: 'Acción - Reserva',
  [CardType.actionReserveVictory]: 'Acción - Reserva - Victoria',
  [CardType.actionTraveller]: 'Acción - Viajero',
  [CardType.curseBasic]: 'Maldición',
  [CardType.treasureBasic]: 'Tesoro',
  [CardType.treasure]: 'Tesoro',
  [CardType.treasureAttack]: 'Tesoro - Ataque',
  [CardType.treasureReserve]: 'Tesoro - Reserva',
  [CardType.victory]: 'Victoria',
  [CardType.victoryBasic]: 'Victoria',
};
