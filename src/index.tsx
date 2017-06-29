import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CallPage from './components/call/CallPage';
import DonePage from './components/call/DonePage';
import { fetchLocationByIP, fetchCallCount } from './redux/remoteData';
import './components/bundle.css';
import './components/shared/scss/style.css';
import './components/shared/scss/vendor/normalize.css';

const history = createHistory();

const store = createStore({});
store.dispatch(fetchLocationByIP());
store.dispatch(fetchCallCount());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/issue" exact={true} component={CallPage} />
        <Route path="/done" exact={true} component={DonePage} />
        <Route path="/about" exact={true} component={AboutPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
