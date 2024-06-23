import { cardTypeLabelsEn } from '@dominion/i18n/en/common/card-type.labels';
import { cardTypeLabelsEs } from '@dominion/i18n/es/common/card-type.labels';
import { Langs } from '@dominion/models/app.model';
import { Card, CardSize, CardType, expansionLogos } from '@dominion/models/card.model';

export interface CardFooterProps {
  card: Card;
  lang: Langs;
  size: CardSize;
}

const labels: Record<Langs, Record<CardType, string>> = { [Langs.en]: cardTypeLabelsEn, [Langs.es]: cardTypeLabelsEs };

const fontSizes: Record<CardType, number> = {
  [CardType.action]: 8,
  [CardType.actionAttack]: 8,
  [CardType.actionAttackTraveller]: 5,
  [CardType.actionDuration]: 7,
  [CardType.actionDurationAttack]: 5,
  [CardType.actionDurationReaction]: 5,
  [CardType.actionReaction]: 8,
  [CardType.actionReserve]: 8,
  [CardType.actionReserveVictory]: 5,
  [CardType.actionTraveller]: 7,
  [CardType.curseBasic]: 11,
  [CardType.treasure]: 10,
  [CardType.treasureAttack]: 8,
  [CardType.treasureBasic]: 11,
  [CardType.treasureReserve]: 8,
  [CardType.victory]: 11,
  [CardType.victoryBasic]: 11,
};

export default function CardFooter({ card, lang, size }: CardFooterProps) {
  const isNormalCard = size === CardSize.Normal;
  const bottom = isNormalCard ? '7px' : '14px';
  const height = isNormalCard ? '10px' : '20px';
  const fontSize = `${isNormalCard ? fontSizes[card.type] : fontSizes[card.type] * 2}px`;
  return (
    <>
      <div
        className="absolute z-20 flex items-center justify-center bg-cover bg-center"
        style={{
          width: isNormalCard ? '18px' : '36px',
          height: isNormalCard ? '18px' : '36px',
          backgroundImage: `url(img/elements/coin.png)`,
          bottom: isNormalCard ? '5px' : '10px',
          left: isNormalCard ? '2px' : '4px',
          fontSize: isNormalCard ? '12px' : '24px',
        }}
      >
        <span className="font-minion font-bold"> {card.cost}</span>
      </div>
      <div className="absolute z-20 flex w-full items-center justify-center" style={{ bottom, height }}>
        <span className="font-trajanPro" style={{ fontSize }}>
          {labels[lang][card.type]}
        </span>
      </div>
      <div
        className="absolute z-20 bg-cover bg-center"
        style={{
          bottom: isNormalCard ? '8px' : '16px',
          right: isNormalCard ? '4px' : '8px',
          backgroundImage: `url(${expansionLogos[card.expansion]})`,
          width: isNormalCard ? '12px' : '24px',
          height: isNormalCard ? '12px' : '24px',
        }}
      ></div>
    </>
  );
}
