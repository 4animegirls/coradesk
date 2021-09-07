import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as themeLayout } from './theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';
import { ThemeContext } from './src/contexts/theme-context';
import { Provider } from 'react-redux';
import Navigation from './src/components/navigation/Navigation';



export const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => {
  const [theme, changeTheme] = useState('dark');


  const toggleTheme = () => {
    let nextTheme = theme === 'light' ? 'dark' : 'light';
    changeTheme(nextTheme);
  };
  return (
    <>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }} >
          <ApplicationProvider {...eva} theme={{ ...eva[theme as "light" | "dark"], ...themeLayout }}>
          <Navigation />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
};

export default App;
