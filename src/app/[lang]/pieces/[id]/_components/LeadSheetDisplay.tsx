'use client';

import { PieceLeadSheet, PieceMusicalData } from '@/types';
import abcjs from 'abcjs';
import { useEffect } from 'react';

type Props = {
    leadSheet: PieceLeadSheet;
    musicalData: PieceMusicalData;
};

export const LeadSheetDisplay = ({ leadSheet, musicalData }: Props) => {
    useEffect(() => {
        leadSheet.forEach((leadSheetSection, index) => {
            const { type, abcNotation } = leadSheetSection;
            const scoreId = `${type}-${index}`;
            const abcFullString = `K:${musicalData.key}\nM:${musicalData.meter}\nL:${musicalData.noteLength}\n${abcNotation}`;
            abcjs.renderAbc(scoreId, abcFullString);
        });
    }, []);
    return (
        <section
            style={{
                direction: 'ltr',
            }}>
            <p className='text-lg'>Lead Sheet:</p>
            {leadSheet.map((leadSheetSection, index) => {
                const { type } = leadSheetSection;
                const scoreId = `${type}-${index}`;

                return (
                    <div key={scoreId}>
                        <p>{type}:</p>
                        <div id={scoreId} />
                    </div>
                );
            })}

            <div id='text-abcjs'></div>
        </section>
    );
};
