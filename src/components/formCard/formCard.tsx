import './formCard.css';
import React from 'react';
import { FormData } from 'types';

interface FormCardProps {
  formData: FormData;
}

class FormCard extends React.Component<FormCardProps> {
  render() {
    const likeColor = this.props.formData.red
      ? 'Red'
      : this.props.formData.green
      ? 'Green'
      : 'none';
    const imgUrl = this.props.formData.image ? this.props.formData.image : '';
    console.log(this.props.formData);
    return (
      <div className="formCard">
        <div className="formCardRow">Name: {this.props.formData.name}</div>
        <div className="formCardRow">Date: {this.props.formData.date}</div>
        <div className="formCardRow">Music genre: {this.props.formData.music}</div>
        <div className="formCardRow">Gamer: {this.props.formData.gamer ? 'yes' : 'no'}</div>
        <div className="formCardRow">Like color: {likeColor}</div>
        {imgUrl.length > 0 ? (
          <img className="formCardImg" src={imgUrl} alt="Img" />
        ) : (
          <div className="formCardImg">no img</div>
        )}
      </div>
    );
  }
}

export default FormCard;
