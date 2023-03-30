import './Forms.css';
import React, { useEffect, useState } from 'react';
import { FormStateData } from 'types';
import FormComponent from '../../components/formComponent/formComponent';
import FormCardBox from '../../components/formCardBox/formCardBox';
interface Props {
  setPageState: React.Dispatch<React.SetStateAction<string>>;
}

function Forms(props: Props) {
  const { setPageState } = props;
  const [formState, setFormState] = useState<FormStateData[]>([]);

  useEffect(() => {
    setPageState('Forms');
  }, [setPageState]);

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
