import { Context } from '../../App';
import './card.css';
import React, { useContext, useState } from 'react';
import { Photo } from 'types';
import CardModal from './cardModal/cardModal';

interface Props {
  photo: Photo;
}

function Card(props: Props) {
  const { photo } = props;
  const { themesState } = useContext(Context);

  const [modalActiv, setModalActiv] = useState(false);
  document.body.style.overflow = modalActiv ? 'hidden' : 'auto';

  return (
    <>
      {modalActiv && <CardModal photo={photo} setModalActiv={setModalActiv} />}
      <div className={`card ${themesState}`} onClick={() => setModalActiv(true)}>
        <div className="title">{photo.title}</div>
        <img src={photo.url_l} className="img" alt="img" />
      </div>
    </>
  );
}

export default Card;
