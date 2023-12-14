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
    console.log(piece);
    const {
        title,
        leadSheet,
        description,
        composer,
        arranger,
        lyricist,
        artist,
        tempo,
        meter,
        key,
        album,
        year,
        genre,
        duration,
        lyrics,
    } = piece;

    useEffect(() => {
        abcjs.renderAbc(`lead-sheet-${id}`, leadSheet, {
            scale: 1.5,
        });
    }, []);

    return (
        <div className='flex flex-col m-auto items-center justify-center'>
            <h1 className='text-2xl'>{title}</h1>
            <p className='text-lg'>{description}</p>
            <div>
                <p className='text-lg'>Composer: {composer}</p>
                <p className='text-lg'>Arranger: {arranger}</p>
                <p className='text-lg'>Lyricist: {lyricist}</p>
                <p className='text-lg'>Artist: {artist}</p>
            </div>
            <div id={`lead-sheet-${id}`} />
            <div>
                <p className='text-lg'>Tempo: {tempo}</p>
                <p className='text-lg'>Meter: {meter}</p>
                <p className='text-lg'>Key: {key}</p>
                <p className='text-lg'>Album: {album}</p>
                <p className='text-lg'>Year: {year}</p>
                <p className='text-lg'>Genre: {genre}</p>
                <p className='text-lg'>Duration: {duration}</p>
            </div>
            <br />
            <p>{lyrics}</p>
        </div>
    );
};

export default Page;
