import { benefitTypeLabelsEn } from '@dominion/i18n/en/common/benefit-type.labels';
import { benefitTypeLabelsEs } from '@dominion/i18n/es/common/benefit-type.labels';
import { Langs } from '@dominion/models/app.model';
import {
  BenefitContent,
  BenefitType,
  BenefitTypeLabel,
  Card,
  CardDescriptionItem as CardDescriptionItemModel,
  CardDescriptionItemType,
  CardSize,
  DescriptionContent,
} from '@dominion/models/card.model';

import DescriptionContentItem from './DescriptionContentItem';

export interface CardDescriptionItemProps {
  card: Card;
  item: CardDescriptionItemModel;
  lang: Langs;
  size: CardSize;
}

const benefitLabels: Record<Langs, Record<BenefitType, BenefitTypeLabel>> = {
  [Langs.en]: benefitTypeLabelsEn,
  [Langs.es]: benefitTypeLabelsEs,
};

export default function CardDescriptionItem({ card, item, lang, size }: CardDescriptionItemProps) {
  const { type, content } = item;
  const isNormalCard = size === CardSize.Normal;
  switch (type) {
    case CardDescriptionItemType.benefit:
      const benefitContent = content as BenefitContent;
      const amount = benefitContent.amount;
      const labelType = amount === 1 ? 'singular' : 'plural';
      const benefitType = benefitContent.type;
      let benefitFontSize = card.benefitFontSizePx ?? 10;
      let width = 12;
      if (!isNormalCard) {
        width *= 2;
        benefitFontSize *= 2;
      }
      if (benefitContent.removeSymbol) {
        width *= 2;
        benefitFontSize *= 2;
      }
      const fontSize = `${benefitFontSize}px`;
      const widthPx = `${width}px`;
      return (
        <div className="flex w-full justify-center font-times font-bold" style={{ fontSize, lineHeight: fontSize }}>
          {benefitType === BenefitType.treasure ? (
            <>
              {!benefitContent.removeSymbol && <span>+</span>}
              <div
                className="flex items-center justify-center bg-cover bg-center"
                style={{
                  width: widthPx,
                  height: widthPx,
                  backgroundImage: `url(img/elements/coin.png)`,
                }}
              >
                <span className="font-minion font-bold">{amount}</span>
              </div>
            </>
          ) : (
            <span>
              +{amount} {benefitLabels[lang][benefitType][labelType]}
            </span>
          )}
        </div>
      );
    case CardDescriptionItemType.divider:
      return (
        <div className={`w-full px-${isNormalCard ? 2 : 4}`}>
          <div className="w-full border border-neutral-900"></div>
        </div>
      );
    case CardDescriptionItemType.description:
      const descriptionContent = content as DescriptionContent[];
      let lineHeightPx = card.descriptionFontSizePx ?? 8;
      lineHeightPx = isNormalCard ? lineHeightPx : 16;
      const lineHeight = `${lineHeightPx}px`;
      return (
        <div className="w-full text-center font-times" style={{ lineHeight, display: 'ruby-text' }}>
          {descriptionContent.map((item, index) => (
            <DescriptionContentItem key={index} card={card} item={item} lang={lang} size={size} />
          ))}
        </div>
      );
    default:
      return <div></div>;
  }
}
