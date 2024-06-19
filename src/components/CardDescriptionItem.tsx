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
  let amount: number;
  let lineHeight = card.descriptionFontSize ?? '8px';
  lineHeight = isNormalCard ? lineHeight : '16px';

  switch (type) {
    case CardDescriptionItemType.benefit:
      const benefitContent = content as BenefitContent;
      const benefitType = benefitContent.type;
      amount = benefitContent.amount;
      const labelType = amount === 1 ? 'singular' : 'plural';
      const fontSize = isNormalCard ? '10px' : '20px';
      return (
        <div
          className="flex w-full justify-center font-times font-bold"
          style={{ fontSize, lineHeight: isNormalCard ? '12px' : '24px' }}
        >
          {benefitType === BenefitType.treasure ? (
            <>
              <span>+</span>
              <div
                className="flex items-center justify-center bg-cover bg-center"
                style={{
                  width: isNormalCard ? '12px' : '24px',
                  height: isNormalCard ? '12px' : '24px',
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
        <div className={`w-full px-${isNormalCard ? 5 : 10}`}>
          <div className="w-full border border-neutral-900"></div>
        </div>
      );
    case CardDescriptionItemType.description:
      const descriptionContent = content as DescriptionContent[];
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
