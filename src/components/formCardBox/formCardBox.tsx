import './formCardBox.css';
import FormCard from '../../components/formCard/formCard';
import React from 'react';
import { FormStateData } from 'types';

interface Props {
  formState: FormStateData[];
}

function FormCardBox(props: Props) {
  const { formState } = props;
  return (
    <div className="formCardBox">
      {formState.length > 0 ? (
        formState.map((formStateData) => (
          <div key={Math.random()}>
            <FormCard formStateData={formStateData} />
          </div>
        ))
      ) : (
        <div>cards list empty</div>
      )}
    </div>
  );
}

export default FormCardBox;
