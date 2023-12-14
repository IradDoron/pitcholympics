import { Piece } from '@/types';

export const pieces: Record<string, Piece> = {
    '1': {
        id: '1',
        leadSheet:
            'M:4/4\nK:C\nL:1/4\n|"C" E G F A | "F" A2 B2 |"G" B c A B |"C" c4|]',
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
