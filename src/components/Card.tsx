import { Card as CardModel, cardBackgrounds, cardTypeLabels, expansionLogos } from '@dominion/models/card.model';

import CardDescriptionItem from './CardDescriptionItem';

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
      <div className="absolute z-20 flex w-full items-center justify-center" style={{ top: '6px' }}>
        <span className="font-trajanPro" style={{ fontSize: '11px' }}>
          {card.name.toUpperCase()}
        </span>
      </div>

      {/* Card art image */}
      <div
        className="absolute w-full bg-cover bg-center"
        style={{ width: '112px', height: '82px', backgroundImage: `url(${card.imagePath})`, top: '20px', left: '5px' }}
      ></div>

      {/* Card description */}
      <div className="absolute z-20 flex w-full flex-wrap items-center" style={{ top: '100px', height: '74px' }}>
        <div className="w-full">
          {card.description.map((descriptionItem, index) => (
            <CardDescriptionItem key={index} descriptionItem={descriptionItem} />
          ))}
        </div>
      </div>

      {/* Footer */}
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
        style={{
          bottom: '5px',
        }}
      >
        <span className="font-trajanPro" style={{ fontSize: '9px' }}>
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
    </div>
  );
}
