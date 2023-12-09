import CourseTrackSectionEditor from '@/components/shared/trackSectionEditor';
import { CourseTrack } from '@/types/libraryPageTypes/libraryContentCourse';
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
                    <CourseTrackSectionEditor
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
