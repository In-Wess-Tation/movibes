import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
      
      <footer></footer>
    </div>
  );
}

export default App;
