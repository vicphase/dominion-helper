import Card from '@dominion/components/Card';
import { cards } from '@dominion/data/base';

export default function Home() {
  return (
    <main className="min-w-screen flex flex-wrap p-10">
      {cards.map(card => (
        <div key={card.name} className="pr-3 pb-3">
          <Card card={card} />
        </div>
      ))}
    </main>
  );
}
