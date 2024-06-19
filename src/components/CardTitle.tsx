import { baseTitleLabelsEn } from '@dominion/i18n/en/base/titles.labels';
import { stapleLabelsEn } from '@dominion/i18n/en/common/staple.labels';
import { baseTitleLabelsEs } from '@dominion/i18n/es/base/titles.labels';
import { stapleLabelsEs } from '@dominion/i18n/es/common/staple.labels';
import { Langs } from '@dominion/models/app.model';
import { BenefitContent, Card, CardDescription, CardType } from '@dominion/models/card.model';

export interface CardTitleProps {
  card: Card;
  lang: Langs;
}

const labelsEn = { ...stapleLabelsEn, ...baseTitleLabelsEn };
const labelsEs = { ...stapleLabelsEs, ...baseTitleLabelsEs };

const labels: Record<Langs, Record<string, string>> = {
  [Langs.en]: labelsEn,
  [Langs.es]: labelsEs,
};

export default function CardTitle({ card, lang }: CardTitleProps) {
  const hasLargeImage = [CardType.curseBasic, CardType.treasureBasic, CardType.victoryBasic].includes(card.type);
  const top = hasLargeImage ? '8px' : '6px';
  const fontSize = hasLargeImage ? '13px' : '10px';
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
          {(labels[lang][card.name] ?? card.name).toUpperCase()}
        </span>
      </div>
    </>
  );
}
