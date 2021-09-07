import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';



export const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => {

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}> 
            
      </ApplicationProvider>
    </>
  );
};

export default App;
