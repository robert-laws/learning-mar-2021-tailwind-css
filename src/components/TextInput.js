import React, { useEffect } from 'react';
import { useInput } from '../hooks/useInput';

const TextInput = ({ inputName, onInput, placeholder, initialValue }) => {
  const [value, onChange] = useInput(initialValue);

  useEffect(() => {
    onInput(inputName, value);
  }, [value, inputName, onInput]);

  return (
    <label className='block'>
      <span className='text-gray-700'>{inputName.split('_').join(' ')}</span>
      <input
        type='text'
        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        name={inputName}
        id={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
