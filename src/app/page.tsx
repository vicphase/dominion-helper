'use client';

import CardList from '@dominion/components/CardList';
import GameMenu from '@dominion/components/GameMenu';
import { randomizeGame } from '@dominion/functions/randomize-game';
import { Card, DominionExpansions } from '@dominion/models/card.model';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [hasGameStarted, setHasGameStarted] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const expansions = searchParams.get('expansions');
    const selectedCards = searchParams.get('selectedCards');
    if (expansions && selectedCards) {
      onStartGame(
        expansions.split(',') as DominionExpansions[],
        selectedCards.split(',').map(item => Number(item)),
      );
    } else {
      setHasGameStarted(false);
    }
  }, []);

  const onStartGame = (expansions: DominionExpansions[], selectedCardIndexes?: number[]) => {
    setHasGameStarted(true);
    const { selectedCards, selectedIndexes } = randomizeGame(expansions, selectedCardIndexes);
    setCards(selectedCards);
    const updatedSearchParams = new URLSearchParams(searchParams.toString());
    updatedSearchParams.set('expansions', expansions.toString());
    updatedSearchParams.set('selectedCards', selectedIndexes.toString());
    window.history.pushState(null, '', '?' + updatedSearchParams.toString());
  };

  const clearGame = () => {
    setHasGameStarted(false);
    window.history.pushState(null, '', '?' + '');
  };

  return (
    <main className="min-w-screen flex flex-wrap p-10">
      {hasGameStarted ? (
        <CardList cards={cards} startNewGame={() => clearGame()} />
      ) : (
        <GameMenu onStartGame={onStartGame} />
      )}
    </main>
  );
}
