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

const hasLargeImageFontSize: Record<CardSize, string> = {
  [CardSize.Normal]: '11px',
  [CardSize.Large]: '22px',
};

const defaultFontSize: Record<CardSize, string> = {
  [CardSize.Normal]: '8px',
  [CardSize.Large]: '16px',
};

export default function CardFooter({ card, lang, size }: CardFooterProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const isNormalCard = size === CardSize.Normal;
  const bottom = isNormalCard ? '7px' : '14px';
  const fontSize = hasLargeImage ? hasLargeImageFontSize[size] : defaultFontSize[size];
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
      <div className="absolute z-20 flex w-full items-center justify-center" style={{ bottom }}>
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
