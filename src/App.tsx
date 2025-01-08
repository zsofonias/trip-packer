import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import PackingList from './components/PackingList';

import { Item } from './interfaces/item.interface';

const initialItems: Item[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item: Item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(itemId: number) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleTogglePacked(itemId: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items? '
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onTogglePacked={handleTogglePacked}
        onClearAll={handleClearAll}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
