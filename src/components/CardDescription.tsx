import { Langs } from '@dominion/models/app.model';
import { Card, CardType } from '@dominion/models/card.model';

import CardDescriptionItem from './CardDescriptionItem';

export interface CardDescriptionProps {
  card: Card;
  lang: Langs;
}

export default function CardDescription({ card, lang }: CardDescriptionProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  return (
    <>
      {!hasLargeImage && (
        <div className="absolute z-20 flex w-full flex-wrap items-center" style={{ top: '100px', height: '74px' }}>
          <div className="w-full px-1">
            {card.description?.map((item, index) => (
              <CardDescriptionItem key={index} card={card} item={item} lang={lang} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
