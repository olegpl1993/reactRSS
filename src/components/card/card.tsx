import { Context } from '../../App';
import './card.css';
import React, { useContext, useState } from 'react';
import { Photo } from 'types';
import Modal from '../../components/modal/modal';

interface Props {
  photo: Photo;
}

function Card(props: Props) {
  const { photo } = props;
  const { themesState } = useContext(Context);
  const [modalActiv, setModalActiv] = useState(false);

  return (
    <>
      {modalActiv && (
        <Modal modalActiv={modalActiv} setModalActiv={setModalActiv}>
          <div className="modalCard">
            <div className="modalTitle">Title: {photo.title}</div>
            <div className="modalTitle">ID: {photo.id}</div>
            <div className="modalTitle">
              Full size: {photo.height_l}x{photo.width_l}
            </div>
            <img src={photo.url_l} className="modalImg" alt="img" />
          </div>
        </Modal>
      )}
      <div className={`card ${themesState}`} onClick={() => setModalActiv(true)}>
        <img src={photo.url_l} className="img" alt="img" />
      </div>
    </>
  );
}

export default Card;
