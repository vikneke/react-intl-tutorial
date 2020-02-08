# react-intl-tutorial
This tutorial will go through essential steps required to set up internalisation in React application using react-intl library.

I first generated new React app with `npx create-react-app react-intl-tutorial`.

To use `react-intl` npm package I first installed it with `npm install --save react-intl`.

I created `locale` directory withing `src` - with two json files `en.json` and `fr.json`. In `en.json` I'll keep text in English and in `fr.json` text in French. So the folder structure is `src/locale/en.json` and `src/locale/fr.json`. Json file keys will be used as `ids` in React app and the value is going to be set based on locale.

Before I could start creating localised components I first had to set up `IntlProvider`. This is done in `App.jsx`.

`IntlProvider` for simple set up requires two `props`: `locale` - here I'm using `en` default locale which is set in hook state, and `messages` object. For `messages` object I imported locale files and assigned them to corresponding locale keys. 

I also created two buttons. On click I'll update locale value which is passed to `IntlProvider`.

The code for `IntlProvider` set up is below.

```
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
```

The final step is to acutally localise text. For this I created `LocalisedComponent`. The code for `LocalisedComponent` is below:

```
import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const LocalisedComponent = ({ intl }) => (
    <React.Fragment>
        {
            intl.formatMessage({ id: 'greeting' })
        }
        <br />
        <FormattedMessage id="question" />
    </React.Fragment>
);

export default injectIntl(LocalisedComponent); 
```

There are two ways to translate text: can either use `intl` object which can be injected with `injectIntl` higher order component or can use `FormattedMessage` component. Either way an `id` has to be set. This `id` is json key that I defined in locale files. All locale files should have the same `keys` but different values (the translated text).

The benefit of using `intl.formatMessage` is that it returns a string - the trasnlated value for provided key. `FormattedMessage` component renders a `span` element with translated value.

Feel free to clone the tutorial.
