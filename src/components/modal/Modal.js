import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal';

import './styles.css';

const Modal = (
    {
      onCancel,
      children,
      isShowing,
    },
) => {

  return (
      <>
        {
          isShowing && (
              <Portal>
                <div
                    className="modalOverlay"
                    onClick={onCancel}
                />
                <div className="modalWindow">
                  {children}
                </div>
              </Portal>
          )
        }
      </>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};
Modal.defaultProps = {
  isOpen: false,
  children: null,
};
export default Modal;