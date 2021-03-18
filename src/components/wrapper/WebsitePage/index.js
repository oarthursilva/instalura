import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Footer } from '../../commons/Footer';
import { Menu } from '../../commons/Menu';
import { Modal } from '../../commons/Modal';
import { Box } from '../../foundation/layout/Container';
import { FormRegister } from '../../pattern/FormRegister';
import { SEO } from '../../commons/SEO';

export const WebsitePageContext = createContext({
  toggleModalRegister: () => { },
});

export default function WebsitePageWrapper({
  children, seoProps, menuProps, pageBoxProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalRegister: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageBoxProps}
      >
        {/*
        [ SOLID ]
        S = single responsability
        O = open closed
        L = ???
        I = interface segregation
        D = dependency inversion
      */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          {(props) => (
            <FormRegister props={props} />
          )}
        </Modal>

        {menuProps.display && (
          <Menu
            onRegisterClick={() => setIsModalOpen(!isModalOpen)}
          />
        )}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headerTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

WebsitePageWrapper.defaultProps = {
  seoProps: {
    headerTitle: '',
  },
  menuProps: {
    display: true,
  },
  pageBoxProps: {
    backgroundImage: 'url(/images/bubbles.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
  },
};
