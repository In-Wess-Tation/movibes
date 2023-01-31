/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';

function App() {

  const style = css`
    display: grid;
    grid-template-columns: 15rem 1fr;

  `
  return (
    <div className="App" css={style}>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
