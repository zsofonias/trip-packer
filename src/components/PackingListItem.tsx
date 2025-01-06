import { Item } from '../interfaces/Iitem.interface';

interface ListItemProp {
  item: Item;
}

export default function PackingListItem({ item }: ListItemProp) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {id} {description} {quantity} {packed ? 'Packed' : 'Not Packed'}
      </span>
      <button>❌</button>
    </li>
  );
}
