import './Forms.css';
import React, { useContext, useEffect, useState } from 'react';
import { FormStateData } from 'types';
import FormComponent from '../../components/formComponent/formComponent';
import FormCardBox from '../../components/formCardBox/formCardBox';
import { Context } from '../../App';

function Forms() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('Forms');
  }, [setPageState]);

  const [formState, setFormState] = useState<FormStateData[]>([]);

  return (
    <div className="forms">
      <div className="formsPage">
        <FormComponent formState={formState} setFormState={setFormState} />
        <FormCardBox formState={formState} />
      </div>
    </div>
  );
}

export default Forms;
