'use client';

import Card from '@dominion/components/Card';
import { cards as baseCards } from '@dominion/data/base';
import { cards as stapleCards } from '@dominion/data/staple';
import { Langs } from '@dominion/models/app.model';
import { Card as CardModel, CardSize } from '@dominion/models/card.model';
import Image from 'next/image';
import { useRef, useState } from 'react';

const flags: Record<Langs, string> = {
  [Langs.en]: 'us-flag',
  [Langs.es]: 'mx-flag',
};

const cards = [...stapleCards, ...baseCards];

export default function Home() {
  const [lang, setLang] = useState(Langs.en);
  const [card, setCard] = useState<CardModel | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (card: CardModel) => {
    setCard(card);
    dialogRef?.current?.showModal();
  };

  return (
    <main className="min-w-screen flex flex-wrap p-10">
      <div className="mb-5 w-full">
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
    </main>
  );
}
