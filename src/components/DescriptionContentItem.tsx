import { DescriptionContent, DescriptionContentType } from '@dominion/models/card.model';

export interface DescriptionContentItemProps {
  item: DescriptionContent;
}

export default function DescriptionContentItem({ item }: DescriptionContentItemProps) {
  const { type, content, breakLine } = item;
  switch (type) {
    case DescriptionContentType.label:
      return (
        <>
          <span style={{ fontSize: '8px' }}>{content}</span>
          {breakLine && <br />}
        </>
      );
    case DescriptionContentType.labelBold:
      return (
        <>
          <span style={{ fontSize: '8px' }} className="font-bold">
            {content}
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
              width: '10px',
              height: '10px',
              backgroundImage: `url(img/elements/coin.png)`,
            }}
          >
            <span className="font-minion font-bold" style={{ fontSize: '8px' }}>
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
            <span className="font-minion font-bold" style={{ fontSize: '8px' }}>
              {content}
            </span>
            <div
              className="justify-center bg-cover bg-center"
              style={{
                width: '8px',
                height: '8px',
                backgroundImage: `url(img/elements/victory.png)`,
              }}
            ></div>
          </div>
          {breakLine && <br />}
        </>
      );
  }
}
