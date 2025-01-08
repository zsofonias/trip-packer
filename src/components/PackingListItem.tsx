import { Item } from '../interfaces/item.interface';

interface ListItemProp {
  item: Item;
  onRemoveItem: (itemId: number) => void;
  onTogglePacked: (itemId: number) => void;
}

function PackingListItem({ item, onRemoveItem, onTogglePacked }: ListItemProp) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onTogglePacked(id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}

export default PackingListItem;
