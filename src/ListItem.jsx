import { useState, useEffect } from 'react';
import './App.css';

function ListItem({ Item, deleteitem, updateItem, onSelectedCostChange }) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


  useEffect(() => {
    const cost = Item.reduce((acc, item, index) =>
      acc + (checkedItems.includes(index) ? item.price * item.quantity : 0), 0);
      onSelectedCostChange(cost);
  }, [checkedItems, Item]);

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
              <p><strong>Quantity:</strong><button onClick={() => updateItem(index, 1)}>+</button> {item.quantity}<button onClick={() => updateItem(index, -1)}>-</button></p>
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

