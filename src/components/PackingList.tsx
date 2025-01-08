import { useState } from 'react';
import { Item } from '../interfaces/item.interface';
import PackingListItem from './PackingListItem';

interface PackingListProps {
  items: Item[];
  onRemoveItem: (itemId: number) => void;
  onTogglePacked: (itemId: number) => void;
  onClearAll: () => void;
}

function PackingList({
  items,
  onRemoveItem,
  onTogglePacked,
  onClearAll,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems &&
          sortedItems.map((item: Item) => {
            return (
              <PackingListItem
                key={item.id}
                item={item}
                onRemoveItem={onRemoveItem}
                onTogglePacked={onTogglePacked}
              />
            );
          })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
