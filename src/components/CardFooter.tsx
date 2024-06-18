import { Card, CardType, cardTypeLabels, expansionLogos } from '@dominion/models/card.model';

export interface CardFooterProps {
  card: Card;
}

export default function CardFooter({ card }: CardFooterProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const bottom = hasLargeImage ? '7px' : '7px';
  const fontSize = hasLargeImage ? '11px' : '8px';
  return (
    <>
      <div
        className="absolute z-20 flex items-center justify-center bg-cover bg-center"
        style={{
          width: '18px',
          height: '18px',
          backgroundImage: `url(img/elements/coin.png)`,
          bottom: '5px',
          left: '2px',
        }}
      >
        <span className="text-md font-minion font-bold"> {card.cost}</span>
      </div>
      <div
        className="absolute z-20 flex w-full items-center justify-center"
        style={{bottom}}
      >
        <span className="font-trajanPro" style={{ fontSize }}>
          {cardTypeLabels[card.type]}
        </span>
      </div>
      <div
        className="absolute z-20 bg-cover bg-center"
        style={{
          bottom: '8px',
          right: '4px',
          backgroundImage: `url(${expansionLogos[card.expansion]})`,
          width: '12px',
          height: '12px',
        }}
      ></div>
    </>
  );
}
