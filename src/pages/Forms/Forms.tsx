import './Forms.css';
import React, { createRef } from 'react';
import Header from '../Header/Header';
import { FormData } from 'types';
import FormCard from '../../components/formCard/formCard';

interface FormState {
  formArr: FormData[];
}
class Forms extends React.Component<unknown, FormState> {
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

  validObj = {
    name: true,
    date: true,
    music: true,
    gamer: true,
    color: true,
    image: true,
  };

  nameRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  musicRef = createRef<HTMLSelectElement>();
  gamerRef = createRef<HTMLInputElement>();
  redRef = createRef<HTMLInputElement>();
  greenRef = createRef<HTMLInputElement>();
  imageRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  validationForm = () => {
    this.validObj.name =
      !!this.formData.name.match(/^[a-zA-Zа-яА-Я]{2,20}?$/u) &&
      this.formData.name !== '' &&
      !(this.formData.name[0] === this.formData.name[0].toLowerCase());
    this.validObj.date = this.formData.date.length > 0;
    this.validObj.music = this.formData.music !== 'empty';
    this.validObj.gamer = this.formData.gamer;
    this.validObj.color = this.formData.red || this.formData.green;
    this.validObj.image = this.formData.image.length > 0;
  };

  clearForm = () => {
    this.formRef.current?.reset();
  };

  createCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    const imgFile = this.imageRef.current?.files;
    const image = imgFile?.length ? URL.createObjectURL(imgFile[0]) : '';
    this.formData.image = image ? image : '';
    this.validationForm();
    this.setState({ formArr: [...this.state.formArr] });
    if (
      Object.values(this.validObj).every((el) => {
        return el === true;
      })
    ) {
      this.setState({ formArr: [...this.state.formArr, Object.assign({}, this.formData)] });
      alert('data has been saved');
      this.clearForm();
    }
  };

  render() {
    const { formArr } = this.state;
    return (
      <div className="forms">
        <Header pageName={'Forms'} />
        <div className="formsPage">
          <form className="formsBox" onSubmit={this.createCard} ref={this.formRef}>
            <label className="formsRow">
              <div>
                <div className="formsTitle">Name</div>
                <input className="formsInput" type="text" placeholder="name" ref={this.nameRef} />
              </div>
              <div className="validRow">{this.validObj.name ? '' : 'incorrect input'}</div>
            </label>
            <label className="formsRow">
              <div>
                <div className="formsTitle">Date</div>
                <input className="formsInput" type="date" ref={this.dateRef} />
              </div>
              <div className="validRow">{this.validObj.date ? '' : 'select date'}</div>
            </label>
            <label className="formsRow">
              <div>
                <div className="formsTitle">Music genre</div>
                <select name="music" ref={this.musicRef} defaultValue="empty">
                  <option disabled value="empty"></option>
                  <option value="pop">Pop</option>
                  <option value="hipHop">Hip hop</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                  <option value="disco">Disco</option>
                  <option value="blues">Blues</option>
                </select>
              </div>
              <div className="validRow">{this.validObj.music ? '' : 'select music'}</div>
            </label>
            <label className="formsRow">
              <div>
                <div className="formsTitle">Gamer?</div>
                <input className="formsInput" type="checkbox" ref={this.gamerRef} />
              </div>
              <div className="validRow">{this.validObj.gamer ? '' : 'only for gamer'}</div>
            </label>
            <label className="formsRow">
              <div>
                <div className="formsTitle">Like color</div>
                <div>
                  Red <input type="radio" name="color" value="red" ref={this.redRef} />
                </div>
                <div>
                  Green <input type="radio" name="color" value="green" ref={this.greenRef} />
                </div>
              </div>
              <div className="validRow">{this.validObj.color ? '' : 'select color'}</div>
            </label>
            <label className="formsRow">
              <div>
                <div className="formsTitle">Img</div>
                <input type="file" multiple accept="image/*" ref={this.imageRef} />
              </div>
              <div className="validRow">{this.validObj.image ? '' : 'select foto'}</div>
            </label>
            <div className="formsRow">
              <input type="submit" value="Create card" className="formsBTN" />
            </div>
          </form>
          <div className="formCardBox">
            {formArr.length > 0 ? (
              formArr.map((formData) => (
                <div key={Math.random()}>
                  <FormCard formData={formData} />
                </div>
              ))
            ) : (
              <div>cards list empty</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
