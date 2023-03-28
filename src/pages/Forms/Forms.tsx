import './Forms.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import { FormData, FormStateData } from 'types';
import FormCard from '../../components/formCard/formCard';
import { SubmitHandler, useForm } from 'react-hook-form';

function Forms() {
  const [formState, setFormState] = useState<FormStateData[]>([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    setFormState([
      ...formState,
      {
        name: formData.name,
        date: formData.date,
        music: formData.music,
        gamer: formData.gamer,
        color: formData.color,
        image: URL.createObjectURL(formData.image[0]),
      },
    ]);
    reset();
  };

  return (
    <div className="forms">
      <Header pageName={'Forms'} />
      <div className="formsPage">
        <form className="formsBox" onSubmit={handleSubmit(onSubmit)}>
          <label className="formsRow">
            <div>
              <div className="formsTitle">Name</div>
              <input
                className="formsInput"
                type="text"
                placeholder="name"
                {...register('name', {
                  required: 'incorrect input',
                  pattern: {
                    value: /^[A-ZА-Я][a-zA-Zа-яА-Я]{2,20}?$/u,
                    message: 'incorrect input',
                  },
                })}
              />
            </div>
            <div className="validRow">{errors.name && errors.name.message}</div>
          </label>
          <label className="formsRow">
            <div>
              <div className="formsTitle">Date</div>
              <input
                className="formsInput"
                type="date"
                {...register('date', {
                  required: 'select date',
                  minLength: 1,
                })}
              />
            </div>
            <div className="validRow">{errors.date && errors.date.message}</div>
          </label>
          <label className="formsRow">
            <div>
              <div className="formsTitle">Music genre</div>
              <select
                {...register('music', {
                  required: 'select music',
                  minLength: 1,
                })}
                defaultValue=""
              >
                <option disabled value=""></option>
                <option value="pop">Pop</option>
                <option value="hipHop">Hip hop</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
                <option value="disco">Disco</option>
                <option value="blues">Blues</option>
              </select>
            </div>
            <div className="validRow">{errors.music && errors.music.message}</div>
          </label>
          <label className="formsRow">
            <div>
              <div className="formsTitle">Gamer?</div>
              <input
                className="formsInput"
                type="checkbox"
                {...register('gamer', {
                  required: 'only for gamer',
                })}
              />
            </div>
            <div className="validRow">{errors.gamer && errors.gamer.message}</div>
          </label>
          <label className="formsRow">
            <div>
              <div className="formsTitle">Like color</div>
              <div>
                Red
                <input
                  type="radio"
                  value="red"
                  {...register('color', {
                    required: 'select color',
                  })}
                />
              </div>
              <div>
                Green
                <input
                  type="radio"
                  value="green"
                  {...register('color', {
                    required: 'select color',
                  })}
                />
              </div>
            </div>
            <div className="validRow">{errors.color && errors.color.message}</div>
          </label>
          <label className="formsRow">
            <div>
              <div className="formsTitle">Img</div>
              <input
                type="file"
                multiple
                accept="image/*"
                {...register('image', {
                  required: 'select image',
                  validate: {
                    acceptedFormat: (files: FileList | null) =>
                      (files && ['image/jpg', 'image/png'].includes(files[0].type)) || 'jpg | png',
                  },
                })}
              />
            </div>
            <div className="validRow">{errors.image && errors.image.message}</div>
          </label>
          <div className="formsRow">
            <input type="submit" value="Create card" className="formsBTN" />
          </div>
        </form>
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
      </div>
    </div>
  );
}

export default Forms;
