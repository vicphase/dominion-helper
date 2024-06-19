import { baseTitleLabelsEn } from '@dominion/i18n/en/base/titles.labels';
import { stapleLabelsEn } from '@dominion/i18n/en/common/staple.labels';
import { baseTitleLabelsEs } from '@dominion/i18n/es/base/titles.labels';
import { stapleLabelsEs } from '@dominion/i18n/es/common/staple.labels';
import { Langs } from '@dominion/models/app.model';
import { BenefitContent, Card, CardDescription, CardSize, CardType } from '@dominion/models/card.model';

export interface CardTitleProps {
  card: Card;
  lang: Langs;
  size: CardSize;
}

const labelsEn = { ...stapleLabelsEn, ...baseTitleLabelsEn };
const labelsEs = { ...stapleLabelsEs, ...baseTitleLabelsEs };

const labels: Record<Langs, Record<string, string>> = {
  [Langs.en]: labelsEn,
  [Langs.es]: labelsEs,
};

const hasLargeImageTop: Record<CardSize, string> = {
  [CardSize.Normal]: '8px',
  [CardSize.Large]: '16px',
};

const defaultTop: Record<CardSize, string> = {
  [CardSize.Normal]: '6px',
  [CardSize.Large]: '12px',
};

const hasLargeImageFontSize: Record<CardSize, string> = {
  [CardSize.Normal]: '13px',
  [CardSize.Large]: '26px',
};

const defaultFontSize: Record<CardSize, string> = {
  [CardSize.Normal]: '10px',
  [CardSize.Large]: '20px',
};

export default function CardTitle({ card, lang, size }: CardTitleProps) {
  const isNormalCard = size === CardSize.Normal;
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const top = hasLargeImage ? hasLargeImageTop[size] : defaultTop[size];
  const fontSize = hasLargeImage ? hasLargeImageFontSize[size] : defaultFontSize[size];
  return (
    <>
      {card.type === CardType.treasureBasic && (
        <>
          <div
            className="absolute z-20 flex items-center justify-center bg-cover bg-center"
            style={{
              width: isNormalCard ? '18px' : '36px',
              height: isNormalCard ? '18px' : '36px',
              backgroundImage: `url(img/elements/coin.png)`,
              top: isNormalCard ? '6px' : '12px',
              left: isNormalCard ? '4px' : '8px',
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
              top: isNormalCard ? '6px' : '12px',
              right: isNormalCard ? '6px' : '12px',
            }}
          >
            <span className="font-minion font-bold" style={{ fontSize: isNormalCard ? '16px' : '32px' }}>
              {((card.description as CardDescription)[0].content as BenefitContent).amount}
            </span>
          </div>
        </>
      )}
      <div className="absolute z-20 flex w-full items-center justify-center" style={{ top }}>
        <span className="font-trajanPro" style={{ fontSize }}>
          {(labels[lang][card.name] ?? card.name).toUpperCase()}
        </span>
      </div>
    </>
  );
}
