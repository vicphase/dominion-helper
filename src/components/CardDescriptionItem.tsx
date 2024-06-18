import {
  BenefitContent,
  benefitTypeLabels,
  CardDescriptionItem as CardDescriptionItemModel,
  CardDescriptionItemType,
} from '@dominion/models/card.model';

export interface CardDescriptionItemProps {
  descriptionItem: CardDescriptionItemModel;
}

export default function CardDescriptionItem({ descriptionItem }: CardDescriptionItemProps) {
  const { type, content } = descriptionItem;
  switch (type) {
    case CardDescriptionItemType.benefit:
      const { amount, type } = content as BenefitContent;
      const labelType = amount === 1 ? 'singular' : 'plural';
      return (
        <div className="font-times flex w-full justify-center font-bold" style={{ fontSize: '9px' }}>
          <span>
            +{amount} {benefitTypeLabels[type][labelType]}
          </span>
        </div>
      );
    default:
      return <div></div>;
  }
}
