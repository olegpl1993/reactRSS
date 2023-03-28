import './formCard.css';
import React from 'react';
import { FormStateData } from 'types';

interface Props {
  formStateData: FormStateData;
}

function FormCard(props: Props) {
  const { formStateData } = props;
  return (
    <div className="formCard">
      <div className="formCardRow">Name: {formStateData.name}</div>
      <div className="formCardRow">Date: {formStateData.date}</div>
      <div className="formCardRow">Music genre: {formStateData.music}</div>
      <div className="formCardRow">Gamer: {formStateData.gamer ? 'yes' : 'no'}</div>
      <div className="formCardRow">Like color: {formStateData.color}</div>
      {formStateData.image.length > 0 ? (
        <img className="formCardImg" src={formStateData.image} alt="Img" />
      ) : (
        <div className="formCardImg">no img</div>
      )}
    </div>
  );
}

export default FormCard;
