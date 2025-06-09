import { useState, useEffect } from 'react'
import AddItem from './AddItem'
import './App.css'
import Headers  from './Header'
import ListItem from './ListItem';

function App() {
  const [item, setItems] = useState([]);

  function addItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  const deleteitem = (ToDelete) => {
    setItems((prev) =>
      prev.filter((_, index) => !ToDelete.includes(index))
    );
  };


  useEffect(() => {
    console.log("Updated Items:", item);
  }, [item]);

  const totalCost = item.reduce((sum, curr) => sum + curr.price * curr.quantity, 0);


  return (
    <>
      <Headers/>
      <div className="app-container">
        <AddItem addItem = {addItem}/>
        <ListItem Item = {item}  deleteitem = {deleteitem} />
        <h3>Total Cost: ₹{totalCost}</h3>
      </div>
      
    </>
  )
}

export default App
