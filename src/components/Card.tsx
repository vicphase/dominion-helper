import { Langs } from '@dominion/models/app.model';
import { Card as CardModel, cardBackgrounds } from '@dominion/models/card.model';

import CardArtImage from './CardArtImage';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';

export interface CardProps {
  card: CardModel;
  lang: Langs;
}

export default function Card({ card, lang }: CardProps) {
  return (
    <div
      className="relative rounded-lg border-2 border-neutral-900 bg-neutral-900"
      style={{ width: '123px', height: '197px' }}
    >
      {/* Card background */}
      <div
        className="absolute z-10 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${cardBackgrounds[card.type]})` }}
      ></div>

      {/* Card Title */}
      <CardTitle card={card} lang={lang} />

      {/* Card art image */}
      <CardArtImage card={card} />

      {/* Card description */}
      <CardDescription card={card} lang={lang} />

      {/* Footer */}
      <CardFooter card={card} lang={lang} />
    </div>
  );
}
