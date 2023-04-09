import banner from './assets/banner.webp';
import Card from './components/Card';

function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1>Alain's Shop</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <div class="grid grid-cols-4 gap-10 my-4">
        {/* <Card /> */}
        <Card rounded={true} flat={false}>
          <h2>T-shirt - Black</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam saepe odio iure, tempora molestiae modi?</p>
          <button class="btn">View</button>
        </Card>
        <Card rounded={false} flat={true}>
          <h2>Hoodie - White</h2>
          <button class="btn">View</button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam saepe odio iure, tempora molestiae modi?</p>
          <p>Only $10</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
