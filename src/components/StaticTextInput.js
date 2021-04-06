import React, { useEffect } from 'react';
import { useStaticInput } from '../hooks/useStaticInput';

const StaticTextInput = ({
  inputName,
  onInput,
  initialValue,
  updateValue,
  visible = true,
}) => {
  const [value, onUpdate] = useStaticInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  useEffect(() => {
    onUpdate(updateValue);
  }, [updateValue, onUpdate]);

  return (
    <div className={`form-element ${visible ? 'show' : 'hide'}`}>
      <label class='block'>
        <span class='text-gray-700'>{inputName}</span>
        <input
          type='text'
          class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          placeholder=''
          name={inputName}
          id={inputName}
          value={value}
          readOnly
        />
      </label>
    </div>
  );
};

export default StaticTextInput;
