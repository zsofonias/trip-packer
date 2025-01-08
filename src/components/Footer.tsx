import { Item } from '../interfaces/item.interface';

interface FooterProps {
  items: Item[];
}

function Footer({ items }: FooterProps) {
  if (!items.length)
    return <footer className="stats">No items on the list</footer>;
  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((totalPackedItems * 100) / totalItems);

  return (
    <footer className="stats">
      {packedPercentage === 100
        ? `Everything is packed, You're ready to go 🚀`
        : `You have ${totalItems} items on your list, ${totalPackedItems} (
      ${packedPercentage}%) already packed`}
    </footer>
  );
}

export default Footer;
