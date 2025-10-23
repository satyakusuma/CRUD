import { useState, useEffect } from "react"
import type { Item } from "../type"

interface Props {
    item: Item;
    onUpdate: (updatedItem: Item) => void;
    onCancel: () => void;
}

const EditItemForm: React.FC<Props> = ({ item, onUpdate, onCancel }) => {
    const [name, setName] = useState(item.name);
    const [desc, setDesc] = useState(item.description);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate({ ...item, name, description: desc });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Item</h3>
            <input type="text" name="nama" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="deskripsi" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button type="submit">Update</button>
            <button type="button" onClick={onCancel}>Batal</button>
        </form>
    );
}

export default EditItemForm;