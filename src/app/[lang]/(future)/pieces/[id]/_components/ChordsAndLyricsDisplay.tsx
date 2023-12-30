import { PieceChordsAndLyrics } from '@types';
import { ChordsAndLyricsSectionDisplay } from './ChordsAndLyricsSectionDisplay';

type Props = {
    chordsAndLyrics: PieceChordsAndLyrics;
};

export const ChordsAndLyricsDisplay = ({ chordsAndLyrics }: Props) => {
    return (
        <div>
            {chordsAndLyrics.map((chordsAndLyricsSection, index) => {
                const { type, chordsAndLyricsNotation } =
                    chordsAndLyricsSection;
                return (
                    <div key={index} className='my-4'>
                        <p>{type}:</p>
                        <ChordsAndLyricsSectionDisplay
                            chordsAndLyricsNotation={chordsAndLyricsNotation}
                        />
                    </div>
                );
            })}
        </div>
    );
};
