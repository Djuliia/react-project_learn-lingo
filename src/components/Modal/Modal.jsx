import { createPortal } from 'react-dom';
import Modal from 'react-modal';
import sprite from '../../images/sprite.svg';
import { StyledBtn } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1300',
    borderRadius: '30px',
    padding: '64px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)',
  },
};
Modal.setAppElement('#modal-root');
const modalRoot = document.querySelector('#modal-root');

export const PopUp = ({ isOpen, onRequestClose, children }) => {
  return createPortal(
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <StyledBtn onClick={onRequestClose}>
        <svg width="32" height="32">
          <use href={`${sprite}#x`} />
        </svg>
      </StyledBtn>
      <div>{children}</div>
    </Modal>,
    modalRoot
  );
};
