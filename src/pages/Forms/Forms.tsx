import './Forms.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import { FormStateData } from 'types';
import FormComponent from '../../components/formComponent/formComponent';
import FormCardBox from '../../components/formCardBox/formCardBox';

function Forms() {
  const [formState, setFormState] = useState<FormStateData[]>([]);
  return (
    <div className="forms">
      <Header pageName={'Forms'} />
      <div className="formsPage">
        <FormComponent formState={formState} setFormState={setFormState} />
        <FormCardBox formState={formState} />
      </div>
    </div>
  );
}

export default Forms;
