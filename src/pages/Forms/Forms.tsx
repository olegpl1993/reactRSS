import './Forms.css';
import React, { useContext, useEffect } from 'react';
import FormComponent from '../../components/formComponent/formComponent';
import FormCardBox from '../../components/formCardBox/formCardBox';
import { Context } from '../../App';

function Forms() {
  const { setPageState } = useContext(Context);
  useEffect(() => {
    setPageState('Forms');
  }, [setPageState]);

  return (
    <div className="forms">
      <div className="formsPage">
        <FormComponent />
        <FormCardBox />
      </div>
    </div>
  );
}

export default Forms;
