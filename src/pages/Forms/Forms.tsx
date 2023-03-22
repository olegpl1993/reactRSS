import './Forms.css';
import React, { createRef } from 'react';
import Header from '../Header/Header';

interface FormData {
  name: string;
  date: string;
  music: string;
  gamer: boolean;
  red: boolean;
  green: boolean;
  image: string;
}

class Forms extends React.Component {
  state = {
    formArr: [],
  };

  formData: FormData = {
    name: '',
    date: '',
    music: '',
    gamer: false,
    red: false,
    green: false,
    image: '',
  };

  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  musicRef = createRef<HTMLSelectElement>();
  gamerRef = createRef<HTMLInputElement>();
  redRef = createRef<HTMLInputElement>();
  greenRef = createRef<HTMLInputElement>();
  imageRef = createRef<HTMLInputElement>();

  createCard = () => {
    const name = this.nameRef.current?.value;
    this.formData.name = name ? name : '';
    const date = this.dateRef.current?.value;
    this.formData.date = date ? date : '';
    const music = this.musicRef.current?.value;
    this.formData.music = music ? music : '';
    const gamer = this.gamerRef.current?.checked;
    this.formData.gamer = gamer ? gamer : false;
    const red = this.redRef.current?.checked;
    this.formData.red = red ? red : false;
    const green = this.greenRef.current?.checked;
    this.formData.green = green ? green : false;
    const image = this.imageRef.current?.value;
    this.formData.image = image ? image : '';
    console.log(this.state);
    console.log(this.formData);
    this.setState({ formArr: [...this.state.formArr, this.formData] });
  };

  render() {
    return (
      <div className="forms">
        <Header pageName={'Forms'} />
        <div className="formsPage">
          <div className="formsBox">
            <div className="formsRow">
              <div className="formsTitle">Name</div>
              <input className="formsInput" type="text" placeholder="name" ref={this.nameRef} />
            </div>
            <div className="formsRow">
              <div className="formsTitle">Date</div>
              <input className="formsInput" type="date" ref={this.dateRef} />
            </div>
            <div className="formsRow">
              <div className="formsTitle">Music genre</div>
              <select name="music" ref={this.musicRef}>
                <option value="pop">Pop</option>
                <option value="hipHop">Hip hop</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
                <option value="disco">Disco</option>
                <option value="blues">Blues</option>
              </select>
            </div>
            <div className="formsRow">
              <div className="formsTitle">Gamer?</div>
              <input className="formsInput" type="checkbox" ref={this.gamerRef} />
            </div>
            <div className="formsRow">
              <div className="formsTitle">Like color</div>
              <div>
                Red <input type="radio" name="color" value="red" ref={this.redRef} />
              </div>
              <div>
                Green <input type="radio" name="color" value="green" ref={this.greenRef} />
              </div>
            </div>
            <div className="formsRow">
              <div className="formsTitle">Img</div>
              <input type="file" multiple accept="image/*" ref={this.imageRef} />
            </div>
            <div className="formsRow">
              <button
                className="formsBTN"
                onClick={() => {
                  this.createCard();
                }}
              >
                Create card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
