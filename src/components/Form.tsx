import { FormEvent, useState } from 'react';
import { Item } from '../interfaces/Iitem.interface';

const optionValues = Array.from({ length: 20 }, (_, idx) => idx + 1);

export default function Form() {
  const [itemDescription, setItemDescription] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  function resetForm() {
    setItemDescription('');
    setItemQuantity(1);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!itemDescription) return;

    const newItem: Item = {
      description: itemDescription,
      quantity: itemQuantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newItem);

    resetForm();
  }

  //   function handleDescriptionInput(e: ChangeEvent<HTMLInputElement>) {
  //     setDescription(e.target.value);
  //   }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        onChange={(e) => {
          setItemQuantity(Number(e.target.value));
        }}
        value={itemQuantity}
      >
        {optionValues.map((optionVal) => (
          <option key={optionVal} value={optionVal}>
            {optionVal}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={itemDescription}
        // onChange={handleDescriptionInput}
        onChange={(e) => setItemDescription(e.target.value)}
        placeholder="Item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
