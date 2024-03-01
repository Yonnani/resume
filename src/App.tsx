import React, { useEffect, useMemo } from 'react';
import './reset.css';
import { data } from './dataStore';
import {HeaderMenuStyle, HeaderMenusWrapperStyle, HeaderWrapperStyle} from './components/header';
import { MainWrapperStyle } from './components/main';

function App() {

  const menus = useMemo(() => data.menus, [data.menus]);

  useEffect(() => {
    console.log({data});
  }, []);

  return (
    <div className="App">
      <HeaderWrapperStyle>
        <HeaderMenusWrapperStyle>
          {
            menus.map(menu => <HeaderMenuStyle key={menu.key}>{menu.name}</HeaderMenuStyle>)
          }
        </HeaderMenusWrapperStyle>
      </HeaderWrapperStyle>
      <MainWrapperStyle>
        ddd
      </MainWrapperStyle>
      <footer></footer>
    </div>
  );
}

export default App;
