import React from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { ModalWrapper } from './styles';

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(e) => {
        const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
