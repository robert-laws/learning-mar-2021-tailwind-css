import React, { useState, useEffect, useCallback } from 'react';
import RadioButton from './RadioButton';

const RadioButtonList = ({ listName, items, onInput, checkedList }) => {
  const [checkBoxes, setCheckBoxes] = useState(checkedList);

  const checkChange = useCallback((radio) => {
    if (radio.checked === true) {
      setCheckBoxes([radio.number]);
    }
  }, []);

  useEffect(() => {
    onInput(listName, checkBoxes);
  }, [listName, checkBoxes, onInput]);

  return (
    <div>
      <div class='block'>
        <span className='text-gray-700'>{listName}</span>
        <div className='mt-2'>
          {items.map((item) => (
            <div key={item.id}>
              <RadioButton
                id_number={item.id}
                listName={listName}
                itemName={item.name}
                checked={checkBoxes.includes(parseInt(item.id)) ? true : false}
                checkChange={checkChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioButtonList;