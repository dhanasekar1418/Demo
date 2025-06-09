import { useState, useEffect } from 'react'
import AddItem from './AddItem'
import './App.css'
import Headers  from './Header'
function App() {
  const [item, setItems] = useState([]);

  function addItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  useEffect(() => {
    console.log("Updated Items:", item);
  }, [item]);

  return (
    <>
      <Headers/>
      <AddItem addItem = {addItem}/>
    </>
  )
}

export default App
