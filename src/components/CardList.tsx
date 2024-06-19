'use client';

import Card from '@dominion/components/Card';
import { Langs } from '@dominion/models/app.model';
import { Card as CardModel, CardSize } from '@dominion/models/card.model';
import Image from 'next/image';
import { useRef, useState } from 'react';

export interface CardListProps {
  cards: CardModel[];
  startNewGame: () => void;
}

const flags: Record<Langs, string> = {
  [Langs.en]: 'us-flag',
  [Langs.es]: 'mx-flag',
};

export default function CardList({ cards, startNewGame }: CardListProps) {
  const [lang, setLang] = useState(Langs.en);
  const [card, setCard] = useState<CardModel | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (card: CardModel) => {
    setCard(card);
    dialogRef?.current?.showModal();
  };
  return (
    <>
      <div className="mb-5 flex w-full">
        <div className="w-1/2">
          {Object.values(Langs).map(item => (
            <button
              className={`mr-3 rounded-full border-8 ${item === lang ? 'border-blue-500' : 'border-transparent'}`}
              key={item}
              onClick={() => setLang(item)}
            >
              <Image src={`/img/elements/${flags[item]}.png`} alt={item} width={64} height={64} />
            </button>
          ))}
        </div>
        <div className="flex w-1/2 items-center justify-end">
          <button className="rounded bg-blue-600 px-5 py-2" type="button" onClick={() => startNewGame()}>
            <span className="text-neutral-200"> Start New Game</span>
          </button>
        </div>
      </div>
      {cards.map(item => (
        <div key={item.name} className="pb-3 pr-3" onClick={() => openDialog(item)}>
          <Card card={item} lang={lang} size={CardSize.Normal} />
        </div>
      ))}
      <dialog ref={dialogRef}>
        <div className="bg-neutral-200 px-3 pb-4">
          <div className="relative flex w-full justify-end">
            <button onClick={() => dialogRef.current?.close()}>
              <span className="text-neutral-900">X</span>
            </button>
          </div>
          {card && <Card card={card as CardModel} lang={lang} size={CardSize.Large} />}
        </div>
      </dialog>
    </>
  );
}
