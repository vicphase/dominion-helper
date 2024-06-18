import {
  BenefitContent,
  BenefitType,
  benefitTypeLabels,
  CardDescriptionItem as CardDescriptionItemModel,
  CardDescriptionItemType,
  DescriptionContent,
} from '@dominion/models/card.model';

import DescriptionContentItem from './DescriptionContentItem';

export interface CardDescriptionItemProps {
  item: CardDescriptionItemModel;
}

export default function CardDescriptionItem({ item }: CardDescriptionItemProps) {
  let amount: number;
  const { type, content } = item;
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
              +{amount} {benefitTypeLabels[benefitType][labelType]}
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
        <div className="w-full text-center font-times" style={{ lineHeight: '8px', display: 'ruby-text' }}>
          {descriptionContent.map((item, index) => (
            <DescriptionContentItem key={index} item={item} />
          ))}
        </div>
      );
    default:
      return <div></div>;
  }
}
