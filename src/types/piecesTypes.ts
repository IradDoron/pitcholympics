export type PieceArrangement = {
    arrangementId: string;
    score: string; // abc notation
    musicalInfo: {
        key: string; // C, C#, Db, etc.
        meter: string; // 4/4, 3/4, 6/8, etc.
        noteLength: string; // 1/4, 1/8, 1/16, etc.
        tempo: string; // 120, 140, 160, etc.
    };
    metadata: {
        title: string;
        arrangers: string[];
        year: string;
        genres: string[];
        duration: number; // in milliseconds;
        instruments: string[];
        tags: string[];
        description: string;
    };
};

export type PieceComment = {
    id: string;
    userId: string;
    pieceId: string;
    text: string;
    timestamp: string;
};

export type PieceLyricsSection = {
    type: 'verse' | 'chorus' | 'bridge' | 'pre-chorus' | 'intro' | 'outro';
    text: string;
};

export type PieceLyrics = PieceLyricsSection[];

export type Piece = {
    id: string;
    musicalData: {
        key: string; // C, C#, Db, etc.
        originalKey: string; // C, C#, Db, etc.
        meter: string; // 4/4, 3/4, 6/8, etc.
        noteLength: string; // 1/4, 1/8, 1/16, etc.
        bpm: string; // 120, 140, 160, etc.
    };
    notation: {
        leadSheet: string; // abc notation
        chordsAndLyrics: string;
        arrangements: Record<string, PieceArrangement>; // arrangementId: PieceArrangement
    };
    metadata: {
        title: string; // name of the piece, for example: My Piece
        pieceUrl: string; // link to the piece on the web, for example: my-piece
        artists: string[];
        composers: string[];
        lyricists: string[];
        lyrics: PieceLyrics;
        album: string;
        albumNumber: number;
        trackNumber: number;
        publishDate: {
            earliestEstimate: Date;
            latestEstimate: Date;
        }
        genres: string[];
        duration: number | string // in milliseconds or in string format, for example: 3:30
        instruments: string[];
        tags: string[];
        description: string;
        language: string; // English, Spanish, etc.
        pieceType: 'exercise' | 'song' | 'other';
    };
    socialData: {
        likes: number;
        views: number;
        shares: number;
        comments: PieceComment[];
    };
};
