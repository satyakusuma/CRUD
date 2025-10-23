import { useState } from "react"
import type { Item } from "./type"
import ItemList from "./components/ItemList"
import AddItemForm from "./components/AddItemForm"

//Data Dummy untuk inisialisasi 
const initialItems: Item[] = [
  { id: 1, name:"React", description: "Library UI dari Facebook" },
  { id: 2, name:"Vue", description: "Framework UI dari Evan You" },
  { id: 3, name:"Angular", description: "Framework UI dari Google" },
]

function App() {
  const [items, setItems] = useState<Item[]>(initialItems)

  const handleAdd = (item: Omit<Item, 'id'>) => {
    const newItem: Item = {
      id: items.length > 0 ? items[items.length -1].id + 1 : 1,
      ...item
    }
    setItems([...items, newItem])
  }

  //Dummy fungsi
  const handleEdit = (item: Item) => {
    console.log("Edit item:", item)
  }

  const handleDelete = (id: number) => {
    console.log("Hapus item dengan id:", id)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Catatan (CRUD DEMO)</h1>
      <AddItemForm onAdd={handleAdd} />

      <h2>Daftar Item</h2>
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default App
