import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main className="cards" aria-label="Cartões numerados">
        <Card numero={1} />
        <Card numero={2} />
        <Card numero={3} />
      </main>
    </div>
  );
}
