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