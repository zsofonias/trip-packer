import { Item } from '../interfaces/Iitem.interface';
import PackingListItem from './PackingListItem';

const initialItems: Item[] = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <PackingListItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default PackingList;
