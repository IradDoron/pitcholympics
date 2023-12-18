'use client';
// import { Locale } from '@/i18n.config';
// import { useRouter } from 'next/navigation';

import React from 'react';
import ItemCard from './ItemCard';
import { GameItem } from '@/types';
import gameItems from '@/mockData/gameItems';

const Items: React.FC = () => {

 const items: GameItem[] = gameItems;

 const containerStyle: React.CSSProperties = {
   display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth : '1200px' 
 }
 
 return (
    <div style={containerStyle}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
 );
};

export default Items;