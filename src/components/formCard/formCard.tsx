import './formCard.css';
import React from 'react';
import { FormData } from 'types';

interface Props {
  formData: FormData;
}

function FormCard(props: Props) {
  const { formData } = props;
  const likeColor = formData.red ? 'Red' : formData.green ? 'Green' : 'none';
  const imgUrl = formData.image ? formData.image : '';
  return (
    <div className="formCard">
      <div className="formCardRow">Name: {formData.name}</div>
      <div className="formCardRow">Date: {formData.date}</div>
      <div className="formCardRow">Music genre: {formData.music}</div>
      <div className="formCardRow">Gamer: {formData.gamer ? 'yes' : 'no'}</div>
      <div className="formCardRow">Like color: {likeColor}</div>
      {imgUrl.length > 0 ? (
        <img className="formCardImg" src={imgUrl} alt="Img" />
      ) : (
        <div className="formCardImg">no img</div>
      )}
    </div>
  );
}

export default FormCard;
