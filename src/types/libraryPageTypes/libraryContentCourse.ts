// import { LibraryContentBase } from './index';

type LibraryContentBase = {
    id: string;
    title: string;
    description: string;
    imageURL: string;
    tags: string[];
    mainSubject: string;
};

type CourseLesson = {
    id: string;
    title: string;
    description: string;
    modulesIds: string[];
};

type CourseSection = {
    id: string;
    title: string;
    description: string;
    lessons: CourseLesson[];
};

type CourseTrack = {
    id: string;
    title: string;
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
