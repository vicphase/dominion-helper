'use client';

import Card from '@dominion/components/Card';
import { cards as baseCards } from '@dominion/data/base';
import { Langs } from '@dominion/models/app.model';
import { cards as stapleCards } from '@dominion/data/staple';
import { useState } from 'react';
import Image from 'next/image';

const flags: Record<Langs, string> = {
  [Langs.en]: 'us-flag',
  [Langs.es]: 'mx-flag',
};

const cards = [...stapleCards, ...baseCards];

export default function Home() {
  const [lang, setLang] = useState(Langs.en);
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
      {cards.map(card => (
        <div key={card.name} className="pb-3 pr-3">
          <Card card={card} lang={lang} />
        </div>
      ))}
    </main>
  );
}
