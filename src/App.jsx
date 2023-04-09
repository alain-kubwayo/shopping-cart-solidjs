import banner from './assets/banner.webp';
import Card from './components/Card';

function App() {
  return (
    <div>
      <header>
        <h1>Alain's Shop</h1>
      </header>
      <img src={banner} alt="site banner" />

      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
