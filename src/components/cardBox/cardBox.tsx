import './cardBox.css';
import Card from '../../components/card/card';
import React from 'react';
import { Photo } from '../../types';

interface Props {
  photoArr: Photo[];
}

function CardBox(props: Props) {
  const { photoArr } = props;
  return (
    <div className="cardBox">
      {photoArr.map((photo) => (
        <div key={photo.id}>
          <Card photo={photo} />
        </div>
      ))}
    </div>
  );
}

export default CardBox;
