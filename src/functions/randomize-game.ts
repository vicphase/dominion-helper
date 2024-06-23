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
): { selectedCards: Card[]; selectedIndexes: number[]; selectedUpgradeCards: Card[] } {
  const cards = getCardsFromExpansion(expansions);
  const numberOfEligibleCards = getNumberOfEligibleCards(cards);
  const selectedIndexes = getCardIndexes(numberOfEligibleCards, existingCardIndexes);
  const selectedCards = getSelectedCards(cards, selectedIndexes);
  const selectedUpgradeCards = getUpgradeCards(selectedCards, cards);
  return { selectedCards, selectedIndexes, selectedUpgradeCards };
}

function getCardsFromExpansion(expansions: DominionExpansions[]): Card[] {
  let cards: Card[] = [];
  expansions.forEach(expansion => (cards = [...cards, ...cardsMap[expansion]]));
  return cards;
}

function getNumberOfEligibleCards(cards: Card[]): number {
  return cards.filter(card => !card.excludedFromSupply).length - 1;
}

function getCardIndexes(numberOfEligibleCards: number, existingCardIndexes?: number[]): number[] {
  let cardIndexes: number[] = [];
  if (existingCardIndexes?.length) {
    cardIndexes = existingCardIndexes;
  } else {
    do {
      const randomIndex = getRandomInt(0, numberOfEligibleCards);
      if (!cardIndexes.includes(randomIndex)) cardIndexes.push(randomIndex);
    } while (cardIndexes.length < 10);
  }
  return cardIndexes;
}

function getSelectedCards(cards: Card[], cardIndexes: number[]): Card[] {
  return cards.filter(card => !card.excludedFromSupply).filter((_, index) => cardIndexes.includes(index));
}

function getUpgradeCards(selectedCards: Card[], cards: Card[]): Card[] {
  let upgradeCards: Card[] = [];
  selectedCards.forEach(
    card =>
      (upgradeCards = [
        ...upgradeCards,
        ...((card.upgradeCards ?? [])
          .map(upgradeCard => cards.find(localCard => upgradeCard === localCard.name))
          .filter(card => !!card) as Card[]),
      ]),
  );
  return upgradeCards;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
