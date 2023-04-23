import './modal.css';
import React, { useEffect } from 'react';

interface Props {
  modalActiv: boolean;
  setModalActiv: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
}

function Modal(props: Props) {
  const { modalActiv, setModalActiv } = props;

  useEffect(() => {
    document.body.style.overflow = modalActiv ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  if (modalActiv) {
    return (
      <div className="modalWrapper" onClick={() => setModalActiv(false)}>
        <div className="modalBox" onClick={(event) => event.stopPropagation()}>
          <button className="modalClose" onClick={() => setModalActiv(false)} />
          {props.children}
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
