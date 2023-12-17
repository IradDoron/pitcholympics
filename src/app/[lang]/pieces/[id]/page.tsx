'use client';

import { pieces } from '@/data/piecesData';
import abcjs from 'abcjs';
import { useEffect } from 'react';
import { ChordsAndLyricsDisplay } from './_components';

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
        notation.leadSheet.forEach((leadSheetSection, index) => {
            const { type, abcNotation } = leadSheetSection;
            const scoreId = `${type}-${index}`;
            const abcFullString = `K:${musicalData.key}\nM:${musicalData.meter}\nL:${musicalData.noteLength}\n${abcNotation}`;
            abcjs.renderAbc(scoreId, abcFullString);
        });
    }, []);

    return (
        <div className='flex flex-col m-auto items-center justify-center'>
            <h1 className='text-2xl'>{metadata.title}</h1>
            <div>
                <p className='text-lg'>Composer: {metadata.artists[0]}</p>
            </div>
            <div>
                <p className='text-lg'>Tempo: {musicalData.bpm}</p>
                <p className='text-lg'>Meter: {musicalData.meter}</p>
                <p className='text-lg'>Key: {musicalData.key}</p>
            </div>
            <section
                style={{
                    direction: 'ltr',
                }}>
                <p className='text-lg'>Lead Sheet:</p>
                {notation.leadSheet.map((leadSheetSection, index) => {
                    const { type } = leadSheetSection;
                    const scoreId = `${type}-${index}`;
                    return (
                        <div key={scoreId}>
                            <p>{type}:</p>
                            <div id={scoreId} />
                        </div>
                    );
                })}
            </section>
            <section className='w-full p-16'>
                <p className='text-lg'>Lyrics & Chords:</p>
                <ChordsAndLyricsDisplay
                    chordsAndLyricsNotation={notation.chordsAndLyrics}
                />
            </section>
            <br />
        </div>
    );
};

export default Page;
