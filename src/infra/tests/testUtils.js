/* eslint-disable react/jsx-props-no-spreading */
// same code than https://testing-library.com/docs/react-testing-library/setup

import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import WebsiteGlobalProvider from '../../components/wrapper/WebsitePage/provider';

const AllProviders = ({ children, ...props }) => (
  <WebsiteGlobalProvider {...props}>
    {children}
  </WebsiteGlobalProvider>
);

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options = {}) => {
  const Provider = (props) => <AllProviders {...props} {...options.providerProps} />;

  return render(ui, { wrapper: Provider, ...options });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
