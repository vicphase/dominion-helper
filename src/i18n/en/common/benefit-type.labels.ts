import { BenefitType, BenefitTypeLabel } from '@dominion/models/card.model';

export const benefitTypeLabelsEn: Record<BenefitType, BenefitTypeLabel> = {
  [BenefitType.action]: { singular: 'Action', plural: 'Actions' },
  [BenefitType.buy]: { singular: 'Buy', plural: 'Buy' },
  [BenefitType.card]: { singular: 'Card', plural: 'Cards' },
  [BenefitType.treasure]: { singular: 'Treasure', plural: 'Treasure' },
};
