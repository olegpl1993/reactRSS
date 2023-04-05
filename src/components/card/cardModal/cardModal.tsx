import { Photo } from 'types';
import './cardModal.css';
import React from 'react';

interface Props {
  photo: Photo;
  setModalActiv: React.Dispatch<React.SetStateAction<boolean>>;
}

function CardModal(props: Props) {
  const { photo, setModalActiv } = props;
  console.log(photo);

  return (
    <div className="modalWrapper" onClick={() => setModalActiv(false)}>
      <div className="modalBox" onClick={(event) => event.stopPropagation()}>
        <div className="modalTitle">{photo.title}</div>
        <div className="modalTitle">Доп информация</div>
        <img src={photo.url_l} className="modalImg" alt="img" />
      </div>
    </div>
  );
}

export default CardModal;
