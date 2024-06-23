import { Langs } from '@dominion/models/app.model';
import { Card, CardSize, CardType } from '@dominion/models/card.model';

import CardDescriptionItem from './CardDescriptionItem';

export interface CardDescriptionProps {
  card: Card;
  lang: Langs;
  size: CardSize;
}

export default function CardDescription({ card, lang, size }: CardDescriptionProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const isNormalCard = size === CardSize.Normal;
  const top = isNormalCard ? '100px' : '200px';
  const height = isNormalCard ? '74px' : '148px';
  return (
    <>
      {!hasLargeImage && (
        <div className="absolute z-20 flex w-full flex-wrap items-center" style={{ top, height }}>
          <div className={`w-full px-${isNormalCard ? 2 : 3}`}>
            {card.description?.map((item, index) => (
              <CardDescriptionItem key={index} card={card} item={item} lang={lang} size={size} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
