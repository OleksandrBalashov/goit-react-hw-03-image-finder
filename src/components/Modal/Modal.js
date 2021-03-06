import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('root-modal');

class Modal extends Component {
  static = {
    onCLoseModal: PropTypes.func,
    children: PropTypes.node,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelKeydownKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeydownKey);
  }

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };

  handelKeydownKey = ({ code }) => {
    if (code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
