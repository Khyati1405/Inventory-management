import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = async () => {
    try {
      await addDoc(collection(db, 'pantryItems'), {
        name,
        quantity,
      });
      setName('');
      setQuantity('');
      alert('Item added successfully');
    } catch (error) {
      console.error('Error adding item: ', error);
      alert('Error adding item');
    }
  };

  return (
    <div>
      <h1>Add Item</h1>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        type="number"
      />
      <Button variant="contained" color="primary" onClick={handleAddItem}>
        Add Item
      </Button>
    </div>
  );
};

export default AddItem;
