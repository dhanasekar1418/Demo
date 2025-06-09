import { useState } from 'react';
import './App.css';

function ListItem({ Item, deleteitem }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleDeleteSelected = () => {
    deleteitem(checkedItems);
    setCheckedItems([]); 
  };

  return (
    <div className="item">
      <h3>Item List</h3>
      {Item.length === 0 ? (
        <p>No items in the list</p>
      ) : (
        <>
          {Item.map((item, index) => (
            <div key={index} className="list-item">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <input
                type="checkbox"
                checked={checkedItems.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
          ))}
          <button onClick={handleDeleteSelected}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ListItem;
