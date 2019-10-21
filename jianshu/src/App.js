import React from 'react';
import {GloablStyled} from './style.js';
import {GloablStyledIcon} from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GloablStyled />
        <GloablStyledIcon />
        <Header />
      </div>
    </Provider>
  );
}

export default App;
