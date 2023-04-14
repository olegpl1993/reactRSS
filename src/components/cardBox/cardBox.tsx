import './cardBox.css';
import Card from '../../components/card/card';
import React from 'react';
import LoadingSpinner from '../../components/Spinner/LoadingSpinner';
import { useAppSelector } from '../../hook';

function CardBox() {
  const { photoArr, isNotFind, isLoading } = useAppSelector((state) => state.photoState);
  console.log('photoArr: ', photoArr);

  if (isNotFind) {
    return <div className="cardBox">Images not found</div>;
  }

  if (isLoading) {
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
