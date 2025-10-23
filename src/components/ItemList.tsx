import type { Item } from '../type'

interface Props {
    items: Item[];
    onEdit: (item: Item) => void;
    onDelete: (id: number) => void;
}

const ItemList: React.FC<Props> = ({ items, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Deskripsi</th>
                    <th>Aksi</th>
                </tr>
        </thead>
        <tbody>
        {items.map((item) => (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                    <button onClick={() => onEdit(item)}>Edit</button>
                    <button onClick={() => onDelete(item.id)}>Hapus</button>    
                </td>
            </tr>
        ))} 
        </tbody>
        </table>
    );
}

export default ItemList;