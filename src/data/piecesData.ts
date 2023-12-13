import { Piece } from '@/types';

export const pieces: Record<string, Piece> = {
    '1': {
        id: '1',
        leadSheet: 'X:1\nT:Sample Tune\nM:4/4\nK:C\n|E2 G2|A4|B4|c4|',
        meter: '4/4',
        key: 'C',
        tempo: 'Moderato',
        title: 'Sample Tune',
        composer: 'John Doe',
        arranger: 'Jane Doe',
        lyricist: 'Anonymous',
        lyrics: 'This is a sample tune with lyrics.',
        album: 'Sample Album',
        artist: 'Sample Artist',
        year: '2023',
        genre: 'Classical',
        duration: '3:30',
        instruments: ['Piano', 'Violin', 'Cello'],
        tags: ['Sample', 'Classical', 'Instrumental'],
        description: 'A beautiful sample tune with various instruments.',
    },
};
