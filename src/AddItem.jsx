import React, { useState } from 'react';
import './AddItem.css'

function AddItem({addItem}) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };
    
    if(!itemName || !itemPrice ) {
        alert("Please fill in all fields.");
    } else {
        addItem(newItem);
        setItemName('');
        setItemPrice('');
        setItemQuantity(1);
    }
  };

  return (
    <div className="add-item-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            id="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div>
          <label>Item Price</label>
          <input
            type="number"
            id="price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>

        <div>
          <label>Item Quantity</label>
          <select
            id="quantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
