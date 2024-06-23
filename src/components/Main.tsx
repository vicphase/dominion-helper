'use client';

import CardList from '@dominion/components/CardList';
import GameMenu from '@dominion/components/GameMenu';
import { randomizeGame } from '@dominion/functions/randomize-game';
import { Card, DominionExpansions } from '@dominion/models/card.model';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import ActiveGameMenu from './ActiveGameMenu';
import { Langs } from '@dominion/models/app.model';

export default function Main() {
  const [hasGameStarted, setHasGameStarted] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [upgradeCards, setUpgradeCards] = useState<Card[]>([]);
  const [lang, setLang] = useState(Langs.en);
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
    const { selectedCards, selectedIndexes, selectedUpgradeCards } = randomizeGame(expansions, selectedCardIndexes);
    setCards(selectedCards);
    setUpgradeCards(selectedUpgradeCards);
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
      <Suspense fallback={<div>Loading...</div>}>
        {hasGameStarted ? (
          <>
            <ActiveGameMenu lang={lang} setLang={setLang} startNewGame={() => clearGame()} />
            <CardList cards={cards} lang={lang} listName="Kingdom Cards" />
            {!!upgradeCards.length && <CardList cards={upgradeCards} lang={lang} listName="Upgrade Cards" />}
          </>
        ) : (
          <GameMenu onStartGame={onStartGame} />
        )}
      </Suspense>
    </main>
  );
}
