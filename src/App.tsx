import { useState, useEffect } from "react";
import type { Item } from "./type";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import EditItemForm from "./components/EditItemForm";

const initialItems: Item[] = [
  { id: 1, name: "React", description: "UI Library" },
  { id: 2, name: "TypeScript", description: "Superset JS" },
];

function App() {
  const [items, setItems] = useState<Item[]>(() => {
    try {
      const savedItems = localStorage.getItem("items");
      return savedItems ? JSON.parse(savedItems) : initialItems;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return initialItems;
    }
  });
  const [editing, setEditing] = useState<Item | null>(null);

  const handleAddItem = (item: Omit<Item, "id">) => {
    const newItem: Item = {
      id: Date.now(),
      ...item,
    };
    setItems([...items, newItem]);
  };

  const handleEdit = (item: Item) => {
    setEditing(item);
  };

  const handleUpdate = (updatedItem: Item) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditing(null);
  };

  const handleCancelEdit = () => {
    setEditing(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Yakin ingin menghapus item ini?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("items", JSON.stringify(items));
      console.log("Saved to localStorage:", localStorage.getItem("items"));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [items]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Catatan (CRUD Demo)</h1>
      {editing ? (
        <EditItemForm
          item={editing}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      ) : (
        <AddItemForm onAdd={handleAddItem} />
      )}
      <hr />
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
