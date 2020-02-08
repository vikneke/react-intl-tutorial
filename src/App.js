import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import LocalisedComponent from './LocalisedComponent';
import messages_en from './locale/en.json';
import messages_fr from './locale/fr.json';
import './App.css';

const messages = {
  'fr': messages_fr,
  'en': messages_en,
};

const App = () => {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <header className="App-header">
          <LocalisedComponent />
          <div style={{ display: 'flex', margin: '1rem' }}>
            <button onClick={() => setLocale('en')}>English</button>
            <button onClick={() => setLocale('fr')}>French</button>
          </div>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
