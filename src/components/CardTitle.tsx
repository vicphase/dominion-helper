import { BenefitContent, Card, CardDescription, CardType } from '@dominion/models/card.model';

export interface CardTitleProps {
  card: Card;
}

export default function CardTitle({ card }: CardTitleProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const top = hasLargeImage ? '8px' : '6px';
  const fontSize = hasLargeImage ? '13px' : '11px';
  return (
    <>
      {card.type === CardType.treasureBasic && (
        <>
          <div
            className="absolute z-20 flex items-center justify-center bg-cover bg-center"
            style={{
              width: '18px',
              height: '18px',
              backgroundImage: `url(img/elements/coin.png)`,
              top: '6px',
              left: '4px',
            }}
          >
            <span className="text-md font-minion font-bold">
              {((card.description as CardDescription)[0].content as BenefitContent).amount}
            </span>
          </div>
          <div
            className="absolute z-20 flex items-center justify-center bg-cover bg-center"
            style={{
              width: '18px',
              height: '18px',
              backgroundImage: `url(img/elements/coin.png)`,
              top: '6px',
              right: '6px',
            }}
          >
            <span className="text-md font-minion font-bold">
              {((card.description as CardDescription)[0].content as BenefitContent).amount}
            </span>
          </div>
        </>
      )}
      <div className="absolute z-20 flex w-full items-center justify-center" style={{ top }}>
        <span className="font-trajanPro" style={{ fontSize }}>
          {card.name.toUpperCase()}
        </span>
      </div>
    </>
  );
}
