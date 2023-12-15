import { Piece } from '@/types';

export const pieces: Record<string, Piece> = {
    '1': {
        id: '1',
        musicalInfo: {
            key: 'Am',
            originalKey: 'Am',
            meter: '4/4',
            noteLength: '1/4',
            bpm: '120',
        },
        notation: {
            leadSheet:
                'X:1\nT:Test Piece\nM:4/4\nL:1/4\nK:C\nC D E F | G A B c |',
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
};
