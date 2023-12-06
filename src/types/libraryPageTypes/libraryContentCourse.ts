import { LibraryContentBase } from './index';

type CourseLesson = {
    id: string;
    title: string;
    description: string;
    modulesIds: string[];
    // some lesson test
};

type CourseSection = {
    id: string;
    title: string;
    description: string;
    lessons: CourseLesson[];
    // some section test
};

type CourseTrack = {
    id: string;
    mainSubject: string;
    sections: CourseSection[];
    required: boolean;
    order: number;
};

export type LibraryContentCourse = LibraryContentBase & {
    contentType: 'course';
    prerequisites: string[];
    tracks: CourseTrack[];
};
