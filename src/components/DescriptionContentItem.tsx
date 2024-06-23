import { adventureDescriptionLabelsEn } from '@dominion/i18n/en/adventures/description.labels';
import { baseDescriptionsLabelsEn } from '@dominion/i18n/en/base/descriptions.labels';
import { sharedLabelsEn } from '@dominion/i18n/en/common/shared.labels';
import { adventureDescriptionLabelsEs } from '@dominion/i18n/es/adventures/description.labels';
import { baseDescriptionsLabelsEs } from '@dominion/i18n/es/base/descriptions.labels';
import { sharedLabelsEs } from '@dominion/i18n/es/common/shared.labels';
import { Langs } from '@dominion/models/app.model';
import { Card, CardSize, DescriptionContent, DescriptionContentType } from '@dominion/models/card.model';

export interface DescriptionContentItemProps {
  card: Card;
  item: DescriptionContent;
  lang: Langs;
  size: CardSize;
}

const descriptionLabels: Record<Langs, Record<string, string>> = {
  [Langs.en]: { ...baseDescriptionsLabelsEn, ...adventureDescriptionLabelsEn, ...sharedLabelsEn },
  [Langs.es]: { ...baseDescriptionsLabelsEs, ...adventureDescriptionLabelsEs, ...sharedLabelsEs },
};

export default function DescriptionContentItem({ card, item, lang, size }: DescriptionContentItemProps) {
  const { type, content, breakLine } = item;
  const isNormalCard = size === CardSize.Normal;
  let fontSizePx = card.descriptionFontSizePx ?? 8;
  fontSizePx = isNormalCard ? fontSizePx : fontSizePx * 2;
  const fontSize = `${fontSizePx}px`;
  const treasureSize = `${fontSizePx * 1.25}px`;
  switch (type) {
    case DescriptionContentType.label:
      return (
        <>
          <span style={{ fontSize }}>{descriptionLabels[lang][content] ?? content}</span>
          {breakLine && <br />}
        </>
      );
    case DescriptionContentType.labelBold:
      return (
        <>
          <span style={{ fontSize }} className="font-bold">
            {descriptionLabels[lang][content] ?? content}
          </span>
          {breakLine && <br />}
        </>
      );
    case DescriptionContentType.labelItalic:
      return (
        <>
          <span style={{ fontSize }} className="italic">
            {descriptionLabels[lang][content] ?? content}
          </span>
          {breakLine && <br />}
        </>
      );
    case DescriptionContentType.treasure:
      return (
        <>
          <div
            className="flex items-center justify-center bg-cover bg-center"
            style={{
              width: treasureSize,
              height: treasureSize,
              backgroundImage: `url(img/elements/coin.png)`,
            }}
          >
            <span className="font-minion font-bold" style={{ fontSize }}>
              {content ? content : '.'}
            </span>
          </div>
          {breakLine && <br />}
        </>
      );
    case DescriptionContentType.victory:
      return (
        <>
          <div className="flex items-center">
            <span className="font-minion font-bold" style={{ fontSize }}>
              {content}
            </span>
            <div
              className="justify-center bg-cover bg-center"
              style={{
                width: isNormalCard ? '8px' : '16px',
                height: isNormalCard ? '8px' : '16px',
                backgroundImage: `url(img/elements/victory.png)`,
              }}
            ></div>
          </div>
          {breakLine && <br />}
        </>
      );
  }
}
