import { createSignal } from 'solid-js';
import banner from './assets/banner.webp';
import Card from './components/Card';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  }

  return (
    <div class="container m-auto">
      <header>
        <span
          onClick={toggleTheme}
        >Dark Mode</span>
        <h1 
          class="uppercase text-xl text-gray-700 font-semibold my-4"
          classList={{ 
            "bg-neutral-900": darkTheme(),
            "text-white": darkTheme()
          }}
        >Alain's Shop</h1>
      </header>
      <div class="h-32 bg-[url('./assets/banner.webp')] bg-cover bg-center">
      </div>
      <div class="grid grid-cols-4 gap-10 my-4">
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
