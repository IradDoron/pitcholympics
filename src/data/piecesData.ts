import { Piece } from '@/types';

export const pieces: Record<string, Piece> = {
    '1': {
        id: '1',
        musicalData: {
            key: 'Am',
            originalKey: 'Am',
            meter: '4/4',
            noteLength: '1/16',
            bpm: '120',
        },
        notation: {
            leadSheet: [
                {
                    type: 'intro',
                    abcNotation: ` "Am" ABcd- dcBA- "G" ABG2- G4 |"F" ABcd- defe- "G" edcd- dBG2 |
                    "Am" ABcd- dcBA- "G" ABG2- G4 |"F" ABcd- defe- "G" edcd- dBGA |"Am" A8 z8 |]`,
                },
                {
                    type: 'verse',
                    abcNotation: `"Am" AABc- c2>B2 c2cB c2<d2 |[M:2/4]"Em" B8 |[M:3/4]"G" z4 z2 GG G2>G2 |
                    [M:4/4]"Am" G2<A2- A4 z4 z2 AB |[M:2/4]"C" c4- ccde |[M:3/4] d2cB- B2AB c4 |
                    [M:4/4]"Dm" z2 z A d2dc- c2>c2 B2A2 |"Am" c3c/d/ B2A2- A4"G" z2 z e |] `,
                },
                {
                    type: 'chorus',
                    abcNotation: `"F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |
                    "F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |] `,
                },
                {
                    type: 'solo',
                    abcNotation: `"Am" ABcd- dcBA- "G" ABG2- G4 |"F" ABcd- defe- "G" edcd- dBGA |"Am" A8 z8 |] `,
                },
                {
                    type: 'verse',
                    abcNotation: `"Am" AABc- c2>B2 c2cB c2<d2 |[M:2/4]"Em" B8 |[M:3/4]"G" z4 z2 GG G2>G2 |
                    [M:4/4]"Am" G2<A2- A4 z4 z2 AB |[M:2/4]"C" c4- ccde |[M:3/4] d2cB- B2AB c4 |
                    [M:4/4]"Dm" z2 z A d2dc- c2>c2 B2A2 |"Am" c3c/d/ B2A2- A4"G" z2 z e |] `,
                },
                {
                    type: 'chorus',
                    abcNotation: `"F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |
                    "F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |] `,
                },
                {
                    type: 'solo',
                    abcNotation: `"Am" ABcd- dcBA- "G" ABG2- G4 |"F" ABcd- defe- "G" edcd- dBG2 |
                    "Am" cBAE- E4- EEGA c2AG |"Dm" A4 z4"E" z BGE (3cAF(3dB=G |
                    "Am" e4- eedc (3g2e2d2 (3c2d2e2 |"Dm" cA-A2 z4"E" z BGE "_3) AF(3dB=G |]`,
                },
                {
                    type: 'chorus',
                    abcNotation: `"F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |
                    "F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |] `,
                },
                {
                    type: 'chorus',
                    abcNotation: `"F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |
                    "F" f8 z2 z A "G" fefd |"F" z2 AA "G" fefe- e2d2 z2 dB |"F" cd2e- "E" e8 z4 |] `,
                },
                {
                    type: 'verse',
                    abcNotation: `"Am" AABc- c2>B2 c2cB c2<d2 |[M:2/4]"Em" B8 |[M:3/4]"G" z4 z2 GG G2>G2 |
                    [M:4/4]"Am" G2<A2- A4 z4 z2 AB |[M:2/4]"C" c4- ccde |[M:3/4] d2cB- B2AB c4 |
                    [M:4/4]"Dm" z2 z A d2dc- c2>c2 B2A2 |"Am" c3c/d/ B2A2- A4"G" z2 z e |] `,
                },
                {
                    type: 'outro',
                    abcNotation: `"Am" ABcd- dcBA- "G" ABG2- G4 |"F" ABcd- defe- "G" edcd- dBG2 |
                    "Am" ABcd- dcBA- "G" ABG2- G4 |"F" ABcd- defe- "G" edcd- dBGA |"Am" A8 z8 |]`,
                },
            ],
            chordsAndLyrics: 'Test Piece\n\n[C]Test [D]Piece',
            arrangements: {
                '1': {
                    arrangementId: '1',
                    score: 'X:1\nT:Test Piece\nM:4/4\nL:1/4\nK:C\nC D E F | G A B c |',
                    musicalInfo: {
                        key: 'C',
                        meter: '4/4',
                        noteLength: '1/4',
                        tempo: '120',
                    },
                    metadata: {
                        title: 'Test Piece',
                        arrangers: ['Test Arranger'],
                        year: '2021',
                        genres: ['Test Genre'],
                        duration: 60000,
                        instruments: ['Test Instrument'],
                        tags: ['Test Tag'],
                        description: 'Test Description',
                    },
                },
            },
        },
        metadata: {
            title: 'נכון להיום',
            pieceUrl: 'נכון-להיום',
            artists: ['זוהר ארגוב'],
            composers: ['אבנר גדסי'],
            lyricists: ['שאול בן שאול'],
            lyrics: [
                {
                    type: 'verse',
                    text: 'יום יום אני תולש מהלוח דף\nיום ראשון עצוב\nיום שני אני שמח\nויום שלישי הוא יום חדש',
                },
                {
                    type: 'chorus',
                    text: 'שבו אשכב על הגב\nאתהפך על הבטן והמוח רץ\nאו... עובד כמו חמור\nבמזוזה אני עבד והמוח רץ',
                },
                {
                    type: 'verse',
                    text: 'יום יום אני הופך מחומר לאבק\nיום ראשון שחור\nיום שני אני זורח\nויום שלישי כוכב חדש',
                },
                {
                    type: 'chorus',
                    text: 'שבו אשכב על הגב\nאתהפך על הבטן והמוח רץ\nאו... עובד כמו חמור\nבמזוזה אני עבד והמוח רץ',
                },
                {
                    type: 'verse',
                    text: 'יום יום אני ממתין לסוף הטוב\nיום ראשון כמעט\nיום שני את נעלמת\nויום שלישי אני לבד',
                },
                {
                    type: 'chorus',
                    text: 'ואז אשכב על הגב\nאתהפך על הבטן והמוח רץ\nאו... עובד כמו חמור\nבמזוזה אני עבד והמוח רץ',
                },
            ],
            album: 'נכון להיום',
            albumNumber: 4,
            trackNumber: 1,
            publishDate: {
                earliestEstimate: new Date('1982-01-01'),
                latestEstimate: new Date('1982-12-31'),
            },
            genres: ['Mizrahi'],
            duration: '3:00',
            instruments: ['Various'],
            tags: ['Israeli', 'Hebrew'],
            description: 'some description here',
            language: 'Hebrew',
            pieceType: 'song',
        },
        socialData: {
            likes: 40,
            views: 2034,
            shares: 15,
            comments: [
                {
                    id: '1',
                    userId: '1',
                    pieceId: '1',
                    text: 'some comment here',
                    timestamp: '2021-06-30T12:00:00Z',
                },
            ],
        },
    },
    '2': {
        id: '2',
        musicalData: {
            key: 'C',
            originalKey: '',
            meter: '4/4',
            noteLength: '1/4',
            bpm: '',
        },
        notation: {
            leadSheet: [
                {
                    type: 'full',
                    abcNotation: `"C"CEGF|"Am"EDCD|"F"EFED|"G"E2 D2|
                    CEGC|CDEC|DECD|EFED|
                    CEGF|EDCD|EFED|C4|]`,
                },
            ],
            chordsAndLyrics: '',
            arrangements: {},
        },
        metadata: {
            title: 'Piano Lead Sheet Exercise',
            pieceUrl: '',
            artists: [],
            composers: [],
            lyricists: [],
            lyrics: [],
            album: '',
            albumNumber: 0,
            trackNumber: 0,
            publishDate: {
                earliestEstimate: new Date(),
                latestEstimate: new Date(),
            },
            genres: [],
            duration: '',
            instruments: [],
            tags: [],
            description: '',
            language: '',
            pieceType: 'exercise',
        },
        socialData: {
            likes: 0,
            views: 0,
            shares: 0,
            comments: [],
        },
    },
    '3': {
        id: '3',
        musicalData: {
            key: '',
            originalKey: '',
            meter: '',
            noteLength: '',
            bpm: '',
        },
        notation: {
            leadSheet: [],
            chordsAndLyrics: `
            4_4_2_2<ו>2<איך>2<ש>|
            4"Em"<לא>4_2_2<אפ>2<נה>2<לר>|
            4"Em/D"<אות>4_2_2<ת>2<מיד>2<אי>|
            4"Cmaj7"<תה>4_2_2<אר>2<צה>2<ל>|
            4"G6"<היות>4_2_2<שו>2<מ>2<רת>|
            4"Em"<לי>4_2_2<היא>2<א>2<מו>|
            4"Em/D"<נים>4_2_2<לא>2<מת>2<רו>|
            4"Cmaj7"<צ>4_2_2<צת>2<ב>2<ג>|
            4"G6"<נים>4_2_2<ו>2<גם>2<א>|
            4"Em"<ני>4_2_2<בין>2<ה>2<ברי>|
            4"Em/D"<יות>4_2_2<לא>2<מת>2<פ>|
            4"Cmaj7"<תה>4_2_2<ל>2<א>2<ח>|
            4"G6"<רות>4_2_2<ג>2<לים>2<עו>|
            4"Em"<לים>4_2_2<חו>2<לות>2<נ>|
            4"Em/D"<עים>4_2_2<איוו>2<שת>2<ה>|
            4"Cmaj7"<רו>4_2_2<ח>2<ב>2<ע>|
            4"G6"<לים>4_2_2<ו>2<ב>2<לי>|
            `,
            arrangements: {},
        },
        metadata: {
            title: 'ואיך שלא',
            pieceUrl: 'ואיך-שלא',
            artists: ['אריאל זילבר'],
            composers: [],
            lyricists: [],
            lyrics: [],
            album: '',
            albumNumber: 0,
            trackNumber: 0,
            publishDate: {
                earliestEstimate: new Date(),
                latestEstimate: new Date(),
            },
            genres: [],
            duration: '',
            instruments: [],
            tags: [],
            description: '',
            language: '',
            pieceType: 'song',
        },
        socialData: {
            likes: 0,
            views: 0,
            shares: 0,
            comments: [],
        },
    },
};

const emptyPiece: Piece = {
    id: '',
    musicalData: {
        key: '',
        originalKey: '',
        meter: '',
        noteLength: '',
        bpm: '',
    },
    notation: {
        leadSheet: [],
        chordsAndLyrics: ``,
        arrangements: {},
    },
    metadata: {
        title: '',
        pieceUrl: '',
        artists: [],
        composers: [],
        lyricists: [],
        lyrics: [],
        album: '',
        albumNumber: 0,
        trackNumber: 0,
        publishDate: {
            earliestEstimate: new Date(),
            latestEstimate: new Date(),
        },
        genres: [],
        duration: '',
        instruments: [],
        tags: [],
        description: '',
        language: '',
        pieceType: 'song',
    },
    socialData: {
        likes: 0,
        views: 0,
        shares: 0,
        comments: [],
    },
};
