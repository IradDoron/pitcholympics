'use client';

import { Button } from '@/components/core';
import { pieces } from '@/data/piecesData';
import { useState } from 'react';
import {
    ChordsAndLyricsDisplay,
    LeadSheetDisplay,
    LyricsDisplay,
} from './_components';

type Props = {
    params: {
        id: string;
    };
};

type CurrentTab = 'chords-and-lyrics' | 'lead-sheet' | 'lyrics';
const Page = ({ params }: Props) => {
    const [currentTab, setCurrentTab] = useState<CurrentTab | ''>('');
    const { id } = params;
    const piece = pieces[id];
    const { musicalData, notation, metadata, socialData } = piece;

    const handleSetCurrentTab = (tab: CurrentTab) => {
        setCurrentTab(tab);
    };

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

            <section className='w-full p-16'>
                <div className='flex justify-center gap-4'>
                    {notation.chordsAndLyrics.length > 0 && (
                        <Button
                            state={
                                currentTab === 'chords-and-lyrics'
                                    ? 'clicked'
                                    : 'default'
                            }
                            onClick={() =>
                                handleSetCurrentTab('chords-and-lyrics')
                            }
                            label='Chords & Lyrics'
                        />
                    )}

                    {metadata.lyrics.length > 0 && (
                        <Button
                            state={
                                currentTab === 'lyrics' ? 'clicked' : 'default'
                            }
                            onClick={() => handleSetCurrentTab('lyrics')}
                            label='Lyrics'
                        />
                    )}

                    {notation.leadSheet.length > 0 && (
                        <Button
                            state={
                                currentTab === 'lead-sheet'
                                    ? 'clicked'
                                    : 'default'
                            }
                            onClick={() => handleSetCurrentTab('lead-sheet')}
                            label='Lead Sheet'
                        />
                    )}
                </div>

                {currentTab === 'chords-and-lyrics' && (
                    <ChordsAndLyricsDisplay
                        chordsAndLyrics={notation.chordsAndLyrics}
                    />
                )}

                {currentTab === 'lyrics' && (
                    <LyricsDisplay lyrics={metadata.lyrics} />
                )}

                {currentTab === 'lead-sheet' && (
                    <LeadSheetDisplay
                        leadSheet={notation.leadSheet}
                        musicalData={musicalData}
                    />
                )}
            </section>
            <br />
        </div>
    );
};

export default Page;
