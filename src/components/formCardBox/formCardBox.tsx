import './formCardBox.css';
import FormCard from '../../components/formCard/formCard';
import React from 'react';
import { FormStateData } from 'types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function FormCardBox() {
  const formState: FormStateData[] = useSelector((state: RootState) => state.formState.data);

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
