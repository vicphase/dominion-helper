'use client';

import { Langs } from '@dominion/models/app.model';
import Image from 'next/image';
import { useState } from 'react';

const flags: Record<Langs, string> = {
  [Langs.en]: 'us-flag',
  [Langs.es]: 'mx-flag',
};

export interface ActiveGameMenuProps {
  lang: Langs;
  setLang: (lang: Langs) => void;
  startNewGame: () => void;
}

export default function ActiveGameMenu({ lang, startNewGame, setLang }: ActiveGameMenuProps) {
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
    </>
  );
}
