import React,{ Component,Fragment } from 'react';
import { GlobalStyle } from './style';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render (){
    return (
      <Provider store = {store} >
      <Fragment>
        <GlobalStyle />
        <BrowserRouter>
        <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
   </Fragment>
   </Provider>
    )
  }
  
}

export default App;
