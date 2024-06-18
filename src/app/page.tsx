import Card from '@dominion/components/Card';
import { cards } from '@dominion/data/base';

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen p-10">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </main>
  );
}
