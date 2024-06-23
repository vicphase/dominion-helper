import { adventureTitleLabelsEn } from '@dominion/i18n/en/adventures/titles.labels';
import { baseTitleLabelsEn } from '@dominion/i18n/en/base/titles.labels';
import { stapleLabelsEn } from '@dominion/i18n/en/common/staple.labels';
import { adventureTitleLabelsEs } from '@dominion/i18n/es/adventures/titles.labels';
import { baseTitleLabelsEs } from '@dominion/i18n/es/base/titles.labels';
import { stapleLabelsEs } from '@dominion/i18n/es/common/staple.labels';
import { Langs } from '@dominion/models/app.model';
import { BenefitContent, Card, CardDescription, CardSize, CardType } from '@dominion/models/card.model';

export interface CardTitleProps {
  card: Card;
  lang: Langs;
  size: CardSize;
}

const labelsEn = { ...stapleLabelsEn, ...baseTitleLabelsEn, ...adventureTitleLabelsEn };
const labelsEs = { ...stapleLabelsEs, ...baseTitleLabelsEs, ...adventureTitleLabelsEs };

const labels: Record<Langs, Record<string, string>> = {
  [Langs.en]: labelsEn,
  [Langs.es]: labelsEs,
};

const hasLargeImageTop: Record<CardSize, string> = {
  [CardSize.Normal]: '8px',
  [CardSize.Large]: '16px',
};

const defaultTop: Record<CardSize, string> = {
  [CardSize.Normal]: '7px',
  [CardSize.Large]: '14px',
};

export default function CardTitle({ card, lang, size }: CardTitleProps) {
  const isTreasure = [CardType.treasureBasic, CardType.treasureReserve].includes(card.type);
  const isNormalCard = size === CardSize.Normal;
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const top = hasLargeImage ? hasLargeImageTop[size] : defaultTop[size];
  let fontSizePx = card.titleFontSizePx ?? (hasLargeImage ? 13 : 10);
  if (size === CardSize.Large) fontSizePx *= 2;
  const fontSize = `${fontSizePx}px`;

  return (
    <>
      {isTreasure && (
        <>
          <div
            className="absolute z-20 flex items-center justify-center bg-cover bg-center"
            style={{
              width: isNormalCard ? '18px' : '36px',
              height: isNormalCard ? '18px' : '36px',
              backgroundImage: `url(img/elements/coin.png)`,
              top: isNormalCard ? '3px' : '6px',
              left: isNormalCard ? '2px' : '4px',
            }}
          >
            <span className="font-minion font-bold" style={{ fontSize: isNormalCard ? '16px' : '32px' }}>
              {((card.description as CardDescription)[0].content as BenefitContent).amount}
            </span>
          </div>
          <div
            className="absolute z-20 flex items-center justify-center bg-cover bg-center"
            style={{
              width: isNormalCard ? '18px' : '36px',
              height: isNormalCard ? '18px' : '36px',
              backgroundImage: `url(img/elements/coin.png)`,
              top: isNormalCard ? '3px' : '6px',
              right: isNormalCard ? '3px' : '6px',
            }}
          >
            <span className="font-minion font-bold" style={{ fontSize: isNormalCard ? '16px' : '32px' }}>
              {((card.description as CardDescription)[0].content as BenefitContent).amount}
            </span>
          </div>
        </>
      )}
      <div
        className="absolute z-20 flex w-full items-center justify-center"
        style={{ top, height: isNormalCard ? '13px' : '26px' }}
      >
        <span className="font-trajanPro" style={{ fontSize }}>
          {(labels[lang][card.name] ?? card.name).toUpperCase()}
        </span>
      </div>
    </>
  );
}
