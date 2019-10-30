import React from 'react';
import {GloablStyled} from './style.js';
import {GloablStyledIcon} from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GloablStyled />
        <GloablStyledIcon />
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact  component={Detail}></Route>
          <Route path="/login" exact  component={Login}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
