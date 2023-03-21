import './Forms.css';
import React from 'react';
import Header from '../Header/Header';

class Forms extends React.Component {
  render() {
    return (
      <div className="forms">
        <Header pageName={'Forms'} />
        <div className="formsPage">
          <div className="formsBox">
            <div className="formsRow">
              <div className="formsTitle">Name</div>
              <input className="formsInput" type="text" placeholder="name" />
            </div>
            <div className="formsRow">
              <div className="formsTitle">Date</div>
              <input className="formsInput" type="date" />
            </div>
            <div className="formsRow">
              <div className="formsTitle">Music genre</div>
              <select name="music">
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
              <input className="formsInput" type="checkbox" />
            </div>
            <div className="formsRow">
              <div className="formsTitle">Like color</div>
              <div>
                Red <input type="radio" name="color" value="red" />
              </div>
              <div>
                Green <input type="radio" name="color" value="green" />
              </div>
            </div>
            <div className="formsRow">
              <div className="formsTitle">Img</div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={() => {
                  console.log('loadImg');
                }}
              />
            </div>
            <div className="formsRow">
              <button className="formsBTN">Create card</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
