import { useState } from "react"
import type { Item } from "./type"

//Data Dummy untuk inisialisasi 
const initialItems: Item[] = [
  { id: 1, name:"React", description: "Library UI dari Facebook" },
  { id: 2, name:"Vue", description: "Framework UI dari Evan You" },
  { id: 3, name:"Angular", description: "Framework UI dari Google" },
]

function App() {
  const [items, setItems] = useState<Item[]>(initialItems)

  return (
    <div style={{ padding: '20px' }}>
      <h1>Daftar Catatan (CRUD DEMO)</h1>
      
    </div>
  )
}

export default App
