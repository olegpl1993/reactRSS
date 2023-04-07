import { createPortal } from 'react-dom';
import './modal.css';
import React, { useEffect } from 'react';

const modalRootElement = document.getElementById('modal') as HTMLElement;

interface Props {
  modalActiv: boolean;
  setModalActiv: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal(props: Props) {
  const { modalActiv, setModalActiv } = props;
  const element = document.createElement('div');
  document.body.style.overflow = modalActiv ? 'hidden' : 'auto';

  useEffect(() => {
    modalRootElement?.appendChild(element);
    return () => {
      modalRootElement?.removeChild(element);
    };
  });

  if (modalActiv) {
    return createPortal(
      <div className="modalWrapper" onClick={() => setModalActiv(false)}>
        <div className="modalBox" onClick={(event) => event.stopPropagation()}>
          <button className="modalClose" onClick={() => setModalActiv(false)} />
          {props.children}
        </div>
      </div>,
      element
    );
  }
  return null;
}

export default Modal;
