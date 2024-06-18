import { Card as CardModel, cardBackgrounds } from '@dominion/models/card.model';

import CardArtImage from './CardArtImage';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';

export interface CardProps {
  card: CardModel;
}

export default function Card({ card }: CardProps) {
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
      <CardTitle card={card} />

      {/* Card art image */}
      <CardArtImage card={card} />

      {/* Card description */}
      <CardDescription card={card} />

      {/* Footer */}
      <CardFooter card={card} />
    </div>
  );
}
