import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProvideAuth } from './hooks/useAuth';
import { useLocale } from './hooks/useLocale';
import IntlProvider from 'react-intl/lib/src/components/provider';
import ReactNotification from 'react-notifications-component';
import Layout from './components/Layout';
import Login from './pages/Login';
import NotFound from './pages/404';
import PrivateRoute from './pages/PrivateRoute';
import UserAccount from './pages/UserAccount';
import LibrarianAccount from './pages/LibrarianAccount';
import Home from './pages/Home/';
import logo from './logo.svg';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const { locale, localeConfig, changeLocale } = useLocale();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <IntlProvider locale={locale} messages={localeConfig}>
        <ProvideAuth>
          <BrowserRouter>
            <ReactNotification />
            <Layout
              lang={locale}
              changeLanguage={lang => changeLocale(lang)}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            >
              <Switch>
                <PrivateRoute component={UserAccount} path={['/account']} />
                <PrivateRoute component={LibrarianAccount} path={['/users']} />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </BrowserRouter>
        </ProvideAuth>
      </IntlProvider>
    </div>
  );
}

export default App;
