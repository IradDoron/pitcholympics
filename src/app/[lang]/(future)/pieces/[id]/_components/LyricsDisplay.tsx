import { PieceLyrics } from '@types';

type Props = {
    lyrics: PieceLyrics;
};

export const LyricsDisplay = ({ lyrics }: Props) => {
    return (
        <div>
            <p className='text-lg'>Lyrics:</p>
            {lyrics.map((lyric, index) => {
                const { type, text } = lyric;
                return (
                    <div key={index} className='my-4'>
                        <p>{type}:</p>
                        <pre className='font-sans'>{text}</pre>
                    </div>
                );
            })}
        </div>
    );
};
