import { createSignal } from 'solid-js';
import banner from './assets/banner.webp';
import { Routes, Route } from '@solidjs/router';
import Home from './pages/Home';

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
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
