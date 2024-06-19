import { baseDescriptionsLabelsEn } from '@dominion/i18n/en/base/descriptions.labels';
import { baseDescriptionsLabelsEs } from '@dominion/i18n/es/base/descriptions.labels';
import { Langs } from '@dominion/models/app.model';
import { Card, CardSize, DescriptionContent, DescriptionContentType } from '@dominion/models/card.model';

export interface DescriptionContentItemProps {
  card: Card;
  item: DescriptionContent;
  lang: Langs;
  size: CardSize;
}

const descriptionLabels: Record<Langs, Record<string, string>> = {
  [Langs.en]: { ...baseDescriptionsLabelsEn },
  [Langs.es]: { ...baseDescriptionsLabelsEs },
};

export default function DescriptionContentItem({ card, item, lang, size }: DescriptionContentItemProps) {
  const { type, content, breakLine } = item;
  const isNormalCard = size === CardSize.Normal;
  let fontSize = card.descriptionFontSize ?? '8px';
  fontSize = isNormalCard ? fontSize : '16px';
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
    case DescriptionContentType.treasure:
      return (
        <>
          <div
            className="flex items-center justify-center bg-cover bg-center"
            style={{
              width: isNormalCard ? '11px' : '22px',
              height: isNormalCard ? '11px' : '22px',
              backgroundImage: `url(img/elements/coin.png)`,
            }}
          >
            <span className="font-minion font-bold" style={{ fontSize: isNormalCard ? '8px' : '16px' }}>
              {content}
            </span>
          </div>
          {breakLine && <br />}
        </>
      );
    case DescriptionContentType.victory:
      return (
        <>
          <div className="flex items-center">
            <span className="font-minion font-bold" style={{ fontSize: isNormalCard ? '8px' : '16px' }}>
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
