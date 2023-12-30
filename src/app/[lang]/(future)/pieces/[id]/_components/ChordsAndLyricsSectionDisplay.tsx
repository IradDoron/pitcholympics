type Props = {
    chordsAndLyricsNotation: string;
};

export const ChordsAndLyricsSectionDisplay = ({ chordsAndLyricsNotation }: Props) => {
    const getChunksFromChordsAndLyricsNotation = (
        chordsAndLyricsNotation: string,
    ) => {
        const chunks = [] as string[];
        let currentChunk = '';

        for (let i = 0; i < chordsAndLyricsNotation.length; i++) {
            const char = chordsAndLyricsNotation[i];
            const endOfChunk = ['>', '_', '|', '\n'];
            if (endOfChunk.includes(char)) {
                const endOfChunkIndex = endOfChunk.indexOf(char);
                currentChunk += endOfChunk[endOfChunkIndex];
                chunks.push(currentChunk);
                currentChunk = '';
            } else if (char === '-') {
                const lastChunk = chunks[chunks.length - 1];
                const newLastChunk = `${lastChunk}-`;
                chunks[chunks.length - 1] = newLastChunk;
            } else {
                currentChunk += char;
            }
        }
        return chunks;
    };

    const chordsAndLyricsChunks = getChunksFromChordsAndLyricsNotation(
        chordsAndLyricsNotation,
    );

    const getLinesFromChordsAndLyricsChunks = (chunks: string[]) => {
        const lines = [] as string[][];
        let currentLine = [];
        for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i];
            if (chunk === '\n') {
                lines.push(currentLine);
                currentLine = [];
            } else {
                currentLine.push(chunk);
            }
        }

        return lines;
    };

    const chordsAndLyricsLines = getLinesFromChordsAndLyricsChunks(
        chordsAndLyricsChunks,
    );

    const getMusicalDataFromChordsAndLyricsChunk = (chunk: string) => {
        // chunk can be one of the following:
        // 1. number<lyrics>
        // 2. number"chord"
        // 3. number"chord"<lyrics>
        // 4. number_
        // 5. |

        type MusicalData = {
            type: 'beat' | 'endOfBar'; // a chunk with musical data is a beat, and a chunk with | is an end of bar
            timeValue?: number;
            chord?: string;
            lyrics?: string;
            isConnectedToNextChunk: boolean;
            chunk?: string;
        };

        const musicalData: MusicalData = {
            type: 'beat',
            chunk: chunk,
            isConnectedToNextChunk: false,
        };

        // check if the chunk is an end of bar
        if (chunk === '|') {
            musicalData.type = 'endOfBar';
            return musicalData;
        }

        // get the time value
        const timeValue = Number(chunk[0]);
        musicalData.timeValue = timeValue;

        // get the chord
        const chordStartIndex = chunk.indexOf('"');
        const chordEndIndex = chunk.indexOf('"', chordStartIndex + 1);
        if (chordStartIndex !== -1 && chordEndIndex !== -1) {
            const chord = chunk.slice(chordStartIndex + 1, chordEndIndex);
            musicalData.chord = chord;
        }

        // get the lyrics
        const lyricsStartIndex = chunk.indexOf('<');
        const lyricsEndIndex = chunk.indexOf('>', lyricsStartIndex + 1);
        if (lyricsStartIndex !== -1 && lyricsEndIndex !== -1) {
            const lyrics = chunk.slice(lyricsStartIndex + 1, lyricsEndIndex);
            musicalData.lyrics = lyrics;
        }

        // check if the chunk is connected to the next chunk
        if (chunk.endsWith('-')) {
            musicalData.isConnectedToNextChunk = true;
        }

        return musicalData;
    };

    return (
        <div>
            <div className='flex flex-col gap-4'>
                {chordsAndLyricsLines.map((line, index) => {
                    return (
                        <div key={index} className='flex'>
                            {line.map((chunk, index) => {
                                const musicalData =
                                    getMusicalDataFromChordsAndLyricsChunk(
                                        chunk,
                                    );

                                const marginClass =
                                    musicalData.isConnectedToNextChunk
                                        ? ''
                                        : 'me-2';

                                if (line[index + 1] === undefined) {
                                    return null;
                                }

                                const nextChunkMusicalData =
                                    getMusicalDataFromChordsAndLyricsChunk(
                                        line[index + 1],
                                    );

                                const isNextChunkEndOfBar =
                                    nextChunkMusicalData.type === 'endOfBar';

                                return (
                                    <div
                                        key={index}
                                        className={`w-fit min-w-[1px] flex flex-col items-center justify-center ${marginClass}`}>
                                        <div className='fit min-w-[1px] h-[24px] text-blue-700 text-center'>
                                            {musicalData.chord}
                                        </div>
                                        <div className='fit w-full flex justify-start'>
                                            {musicalData.lyrics}{' '}
                                            <span>
                                                {isNextChunkEndOfBar &&
                                                musicalData.isConnectedToNextChunk
                                                    ? '-'
                                                    : ''}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            <pre>{chordsAndLyricsNotation}</pre>
        </div>
    );
};
