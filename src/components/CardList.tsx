import Card from '@dominion/components/Card';
import { Langs } from '@dominion/models/app.model';
import { Card as CardModel, CardSize } from '@dominion/models/card.model';
import { useRef, useState } from 'react';

export interface CardListProps {
  cards: CardModel[];
  lang: Langs;
  listName: string;
}

export default function CardList({ cards, lang, listName }: CardListProps) {
  const [card, setCard] = useState<CardModel | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (card: CardModel) => {
    setCard(card);
    dialogRef?.current?.showModal();
  };
  return (
    <>
      <div className="w-full text-center">
        <h2 className="mt-10 mb-7 text-3xl">{listName}</h2>
      </div>
      <div className="flex w-full flex-wrap">
        {cards.map(item => (
          <div
            key={item.name}
            className="flex w-1/2 justify-center pb-3 sm:w-1/4 lg:w-1/6"
            onClick={() => openDialog(item)}
          >
            <Card card={item} lang={lang} size={CardSize.Normal} />
          </div>
        ))}
      </div>

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
