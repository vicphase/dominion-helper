import { cards as adventureCards } from '@dominion/data/cards/adventures';
import { cards as baseCards } from '@dominion/data/cards/base';
import { Card, DominionExpansions } from '@dominion/models/card.model';

const cardsMap: Record<DominionExpansions, Card[]> = {
  [DominionExpansions.Base]: baseCards,
  [DominionExpansions.Adventures]: adventureCards,
};

export function randomizeGame(
  expansions: DominionExpansions[],
  existingCardIndexes?: number[],
): { selectedCards: Card[]; selectedIndexes: number[] } {
  let cards: Card[] = [];
  expansions.forEach(expansion => (cards = [...cards, ...cardsMap[expansion]]));
  const possibleRandomNumbers = cards.length - 1;
  let cardIndexes: number[] = [];
  if (existingCardIndexes?.length) {
    cardIndexes = existingCardIndexes;
  } else {
    do {
      const randomIndex = getRandomInt(0, possibleRandomNumbers);
      if (!cardIndexes.includes(randomIndex)) cardIndexes.push(randomIndex);
    } while (cardIndexes.length < 10);
  }
  return { selectedCards: cards.filter((_, index) => cardIndexes.includes(index)), selectedIndexes: cardIndexes };
}
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
