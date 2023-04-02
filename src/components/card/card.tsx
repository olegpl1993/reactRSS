import { Context } from '../../App';
import './card.css';
import React, { useContext } from 'react';
import { Photo } from 'types';

interface Props {
  photo: Photo;
}

function Card(props: Props) {
  const { photo } = props;
  const { themesState } = useContext(Context);

  return (
    <div className={`card ${themesState}`}>
      <div className="title">{photo.title}</div>
      <img src={photo.url_l} className="img" alt="productImg" />
    </div>
  );
}

export default Card;
