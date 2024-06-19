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
  DescriptionContent,
} from '@dominion/models/card.model';

import DescriptionContentItem from './DescriptionContentItem';

export interface CardDescriptionItemProps {
  card: Card;
  item: CardDescriptionItemModel;
  lang: Langs;
}

const benefitLabels: Record<Langs, Record<BenefitType, BenefitTypeLabel>> = {
  [Langs.en]: benefitTypeLabelsEn,
  [Langs.es]: benefitTypeLabelsEs,
};

export default function CardDescriptionItem({ card, item, lang }: CardDescriptionItemProps) {
  let amount: number;
  const { type, content } = item;
  const lineHeight = card.descriptionFontSize ?? '8px';
  switch (type) {
    case CardDescriptionItemType.benefit:
      const benefitContent = content as BenefitContent;
      const benefitType = benefitContent.type;
      amount = benefitContent.amount;
      const labelType = amount === 1 ? 'singular' : 'plural';
      return (
        <div
          className="flex w-full justify-center font-times font-bold"
          style={{ fontSize: '10px', lineHeight: '12px' }}
        >
          {benefitType === BenefitType.treasure ? (
            <>
              <span>+</span>
              <div
                className="flex items-center justify-center bg-cover bg-center"
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundImage: `url(img/elements/coin.png)`,
                }}
              >
                <span className="font-minion font-bold" style={{ marginTop: '1px' }}>
                  {amount}
                </span>
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
        <div className="w-full px-5">
          <div className="w-full border border-neutral-900"></div>
        </div>
      );
    case CardDescriptionItemType.description:
      const descriptionContent = content as DescriptionContent[];
      return (
        <div className="w-full text-center font-times" style={{ lineHeight, display: 'ruby-text' }}>
          {descriptionContent.map((item, index) => (
            <DescriptionContentItem key={index} card={card} item={item} lang={lang} />
          ))}
        </div>
      );
    default:
      return <div></div>;
  }
}
