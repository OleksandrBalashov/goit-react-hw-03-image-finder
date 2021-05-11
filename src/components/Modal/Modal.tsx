import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('root-modal')!;

interface Props {
  onCloseModal(e?: React.MouseEvent<HTMLImageElement, MouseEvent>): Promise<void>
  children: ReactNode
}

class Modal extends Component<Props> {

  componentDidMount() {
    window.addEventListener('keydown', this.handelKeydownKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeydownKey);
  }

  handleBackdropClick = ({ target, currentTarget }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };

  handelKeydownKey = ({ code }: any) => {
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
