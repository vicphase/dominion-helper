import { BenefitType, BenefitTypeLabel } from '@dominion/models/card.model';

export const benefitTypeLabelsEs: Record<BenefitType, BenefitTypeLabel> = {
  [BenefitType.action]: { singular: 'Acción', plural: 'Acciones' },
  [BenefitType.buy]: { singular: 'Compra', plural: 'Compras' },
  [BenefitType.card]: { singular: 'Carta', plural: 'Cartas' },
  [BenefitType.treasure]: { singular: 'Tesoro', plural: 'Tesoro' },
};
