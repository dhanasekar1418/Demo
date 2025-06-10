import { useState, useEffect } from 'react'
import AddItem from './AddItem'
import './App.css'
import Headers  from './Header'
import ListItem from './ListItem';
import Products from './Products';
import Footer from './Footer';

function App() {
  const [item, setItems] = useState([]);
  const [selectedCost, setSelectedCost] = useState(0);


  function addItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  const deleteitem = (ToDelete) => {
    setItems((prev) =>
      prev.filter((_, index) => !ToDelete.includes(index))
    );
  };

  const updateItem = (index, val) => {
    setItems((prev) => 
      prev.map((item, i) => 
      i == index ? {...item, quantity:Math.max(1, item.quantity + val)} : item)
    )
  }


  useEffect(() => {
    console.log("Updated Items:", item);
  }, [item]);

  const totalCost = item.reduce((sum, curr) => sum + curr.price * curr.quantity, 0);

  return (
    <>
      <Headers/>
      <div className="app-container">
        <AddItem addItem = {addItem}/>
        <ListItem Item = {item}  deleteitem = {deleteitem}  updateItem = {updateItem}  onSelectedCostChange={setSelectedCost}/>
        <h3>Total Cost: ₹{totalCost}</h3>
        <h3>Selected Cost: ₹{selectedCost}</h3>
      </div>
      <Footer />
      
    </>
  )
}

export default App
