'use client';

import { pieces } from '@/data/piecesData';
import abcjs from 'abcjs';
import { useEffect } from 'react';

type Props = {
    params: {
        id: string;
    };
};

const Page = ({ params }: Props) => {
    const { id } = params;
    const piece = pieces[id];
    const { musicalData, notation, metadata, socialData } = piece;

    useEffect(() => {
        abcjs.renderAbc(`lead-sheet-${id}`, notation.leadSheet, {
            scale: 1,
        });
    }, []);

    return (
        <div className='flex flex-col m-auto items-center justify-center'>
            <h1 className='text-2xl'>{metadata.title}</h1>
            <div>
                <p className='text-lg'>Composer: {metadata.artists[0]}</p>
            </div>
            <div id={`lead-sheet-${id}`} />
            <div>
                <p className='text-lg'>Tempo: {musicalData.bpm}</p>
                <p className='text-lg'>Meter: {musicalData.meter}</p>
                <p className='text-lg'>Key: {musicalData.key}</p>
            </div>
            <br />
        </div>
    );
};

export default Page;
