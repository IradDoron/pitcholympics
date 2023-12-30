import { TrackSectionEditor } from '@shared';
import { CourseTrack } from '@types';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    currentTrack: CourseTrack;
    setCurrentTrack: Dispatch<SetStateAction<CourseTrack>>;
};

export const TrackSections = ({ currentTrack, setCurrentTrack }: Props) => {
    return (
        <div>
            <h2 className='text-xl'>Sections:</h2>
            {currentTrack.sections?.map((section, index) => {
                const { id } = section;
                return (
                    <TrackSectionEditor
                        key={id}
                        sectionIndex={index}
                        currentTrack={currentTrack}
                        setCurrentTrack={setCurrentTrack}
                    />
                );
            })}
        </div>
    );
};
