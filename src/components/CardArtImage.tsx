import { Card, CardSize, CardType } from '@dominion/models/card.model';

export interface CardArtImageProps {
  card: Card;
  size: CardSize;
}

const hasLargeImageWidth: Record<CardSize, string> = {
  [CardSize.Normal]: '112px',
  [CardSize.Large]: '224px',
};

const defaultWidth: Record<CardSize, string> = {
  [CardSize.Normal]: '108px',
  [CardSize.Large]: '220px',
};

const hasLargeImageHeight: Record<CardSize, string> = {
  [CardSize.Normal]: '140px',
  [CardSize.Large]: '280px',
};

const defaultImageHeight: Record<CardSize, string> = {
  [CardSize.Normal]: '81px',
  [CardSize.Large]: '162px',
};

const hasLargeImageTop: Record<CardSize, string> = {
  [CardSize.Normal]: '26px',
  [CardSize.Large]: '52px',
};

const defaultTop: Record<CardSize, string> = {
  [CardSize.Normal]: '20px',
  [CardSize.Large]: '40px',
};

export default function CardArtImage({ card, size }: CardArtImageProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const width = hasLargeImage ? hasLargeImageWidth[size] : defaultWidth[size];
  const height = hasLargeImage ? hasLargeImageHeight[size] : defaultImageHeight[size];
  const top = hasLargeImage ? hasLargeImageTop[size] : defaultTop[size];
  const isNormalCard = size === CardSize.Normal;
  const left = isNormalCard ? '5px' : '10px';

  return (
    <div
      className="absolute w-full bg-cover bg-center"
      style={{ width, height, backgroundImage: `url(${card.imagePath})`, top, left }}
    ></div>
  );
}
