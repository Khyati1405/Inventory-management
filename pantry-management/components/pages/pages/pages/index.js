import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { List, ListItem, ListItemText } from '@mui/material';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, 'pantryItems');
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsList = itemsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsList);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Pantry Items</h1>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
