import { Langs } from '@dominion/models/app.model';
import { Card as CardModel, CardSize, cardBackgrounds } from '@dominion/models/card.model';

import CardArtImage from './CardArtImage';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';

export interface CardProps {
  card: CardModel;
  lang: Langs;
  size: CardSize;
}

const widths: Record<CardSize, string> = {
  [CardSize.Normal]: '123px',
  [CardSize.Large]: '246px',
};

const heights: Record<CardSize, string> = {
  [CardSize.Normal]: '197px',
  [CardSize.Large]: '394px',
};

export default function Card({ card, lang, size }: CardProps) {
  return (
    <div
      className="relative rounded-lg border-2 border-neutral-900 bg-neutral-900"
      style={{ width: widths[size], height: heights[size] }}
    >
      {/* Card background */}
      <div
        className="absolute z-10 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${cardBackgrounds[card.type]})` }}
      ></div>

      {/* Card Title */}
      <CardTitle card={card} lang={lang} size={size} />

      {/* Card art image */}
      <CardArtImage card={card} size={size} />

      {/* Card description */}
      <CardDescription card={card} lang={lang} size={size} />

      {/* Footer */}
      <CardFooter card={card} lang={lang} size={size} />
    </div>
  );
}
