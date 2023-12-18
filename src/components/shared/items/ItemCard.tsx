// // ItemCard.tsx
import React from 'react';
import { GameItem } from '@/types';
import { Console } from 'console';
import Image from 'next/image';
import { size } from 'node_modules/cypress/types/lodash';

interface ItemCardProps {
  item: GameItem;
 }
 


 const ItemCard: React.FC<ItemCardProps> = ({ item }) => {

  const cardStyle: React.CSSProperties = {
    width: '200px', height: '350px', padding: '20px', margin: '10px', border: '1px solid #ccc', textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column'
  }
  
  const card: React.CSSProperties = {
    position: 'absolute', top: '10px', right: '10px', backgroundColor: '#FF0000', color: '#FFF', borderRadius: '50%', padding: '2px 4px', fontSize: '12px' 
  }
  
  const image: React.CSSProperties = {
     width: '100%', height: 'auto' 
  }
  

  return (
    <div style={cardStyle}>
      <Image src={require('../../../mockData/itemsImages/' + item.image)} alt={item.name} style={image} />
      <div style={card}>{item.quantity}</div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p style={{ fontWeight: 'bold', marginTop: '' }}>{item.rarity}</p>
    </div>
  );
};

export default ItemCard;