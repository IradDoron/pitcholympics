import { Link } from '@/components/core';
import { pianoAccompanimentPatterns } from '@/data/pianoData';
import { PianoAccompanimentPattern } from '@/types';

const PianoAccompanimentPatternCard = ({
    pattern,
}: {
    pattern: PianoAccompanimentPattern;
}) => {
    const {
        id,
        name,
        description,
        videoTutorialsUrls,
        mainTutorialUrlIndex,
        useCases,
        hand,
        category,
        optionalMeters,
        abcNotationExampleInC,
    } = pattern;

    const { name: categoryName, description: categoryDescription } = category;
    return (
        <div className='border border-gray-300 rounded-md p-4 flex flex-col items-start'>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-gray-500'>ID: {id}</p>
            <p>{description}</p>
            <p className='text-gray-500'>Category: {categoryName}</p>
            <p className='text-gray-500'>
                Category description: {categoryDescription}
            </p>
            <p className='text-gray-500'>Hand: {hand}</p>
            <p className='text-gray-500'>Meters: {optionalMeters.join(', ')}</p>
            <p>{abcNotationExampleInC}</p>
            <p className='text-gray-500'>{useCases.join(', ')}</p>
            <label className='text-gray-500'>
                Video tutorials:
                <div>
                    {videoTutorialsUrls.map((url, index) => {
                        return (
                            <ul key={index} className='list-disc mx-4'>
                                <li>
                                    <a
                                        href={url}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {url}
                                    </a>
                                </li>
                            </ul>
                        );
                    })}
                </div>
            </label>
            <Link
                url={`accompaniment-patterns/${id}`}
                label='Go to pattern'
                className='mx-auto my-4'
            />
        </div>
    );
};

const Page = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Piano accompaniment patterns</h1>
            <div className='flex gap-8 m-8'>
                {Object.values(pianoAccompanimentPatterns).map(pattern => (
                    <PianoAccompanimentPatternCard
                        key={pattern.id}
                        pattern={pattern}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
