import { Card, CardType } from '@dominion/models/card.model';

export interface CardArtImageProps {
  card: Card;
}
export default function CardArtImage({ card }: CardArtImageProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const height = hasLargeImage ? '140px' : '112px';
  const top = hasLargeImage ? '26px' : '20px';
  return (
    <div
      className="absolute w-full bg-cover bg-center"
      style={{ width: '112px', height, backgroundImage: `url(${card.imagePath})`, top, left: '5px' }}
    ></div>
  );
}
