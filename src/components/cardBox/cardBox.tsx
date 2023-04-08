import './cardBox.css';
import Card from '../../components/card/card';
import React from 'react';
import { Photo } from '../../types';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';

interface Props {
  photoArr: Photo[];
  isNotFind: boolean;
}

function CardBox(props: Props) {
  const { photoArr, isNotFind } = props;

  if (!photoArr.length && isNotFind) {
    return <div className="cardBox">Images not found</div>;
  }

  if (!photoArr.length) {
    return (
      <div className="cardBox">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="cardBox">
      {photoArr.map((photo) => {
        if (photo.url_l) {
          return (
            <div key={photo.id}>
              <Card photo={photo} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default CardBox;
