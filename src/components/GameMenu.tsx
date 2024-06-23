'use client';
import { DominionExpansions } from '@dominion/models/card.model';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export interface GameMenuProps {
  onStartGame: (expansions: DominionExpansions[]) => void;
}

export default function GameMenu({ onStartGame }: GameMenuProps) {
  const [selectedExpansions, setSelectedExpansion] = useState<DominionExpansions[]>([]);
  const canStartGame = !!selectedExpansions.length;

  const toggleSelectedExpansion = (expansion: DominionExpansions) => {
    const isSelected = selectedExpansions.includes(expansion);
    const selectedExpansionsUpdate = isSelected
      ? selectedExpansions.filter(item => item !== expansion)
      : selectedExpansions.concat(expansion);
    setSelectedExpansion(selectedExpansionsUpdate);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onStartGame(selectedExpansions);
  };

  return (
    <div className="w-full text-center">
      <h1 className="mb-10 text-5xl">Dominion Helper</h1>

      <h2 className="mb-10 text-3xl">Create a New Game</h2>
      <form className="w-full" onSubmit={handleSubmit}>
        <p className="mb-5 text-xl">Select expansion(s)</p>

        <div className="mb-20 flex w-full flex-wrap">
          {Object.values(DominionExpansions).map(expansion => (
            <button
              key={expansion}
              className="w-1/2 p-3"
              type="button"
              onClick={() => toggleSelectedExpansion(expansion)}
            >
              <div
                className={`rounded border border-neutral-700 p-3 ${selectedExpansions.includes(expansion) ? 'bg-yellow-200' : 'bg-transparent'}`}
                style={{ minHeight: '135px' }}
              >
                {expansion.toUpperCase()}
                <div className="mt-3 flex w-full justify-center">
                  <Image src={`/img/elements/${expansion}.png`} alt={expansion} width={64} height={64} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex w-full justify-center">
          <button
            disabled={!canStartGame}
            className={`rounded border border-neutral-700 bg-blue-600 px-10 py-3 ${canStartGame ? 'text-neutral-100' : 'text-neutral-300'}`}
            type="submit"
          >
            <span> Start Game</span>
          </button>
        </div>
      </form>
    </div>
  );
}
