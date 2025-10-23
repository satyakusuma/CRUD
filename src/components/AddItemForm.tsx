import { useState } from 'react'
import type { Item } from '../type'

interface Props {
    onAdd: (item: Omit<Item, 'id'>) => void;
}

const AddItemForm: React.FC<Props> = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || ! desc) return;
        onAdd({ name, description: desc });
        setName('');
        setDesc('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Tambah Item Baru</h3>
            <input type="text" name="nama" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" name="deskripsi" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button type="submit">Tambah</button>
        </form>
    );
}

export default AddItemForm;