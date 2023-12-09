// import { LibraryContentBase } from './index';

type LibraryContentBase = {
    id: string;
    title: string;
    description: string;
    imageURL: string;
    tags: string[];
    mainSubject: string;
};

export type CourseLesson = {
    id: string;
    title: string;
    description: string;
    modulesIds: string[];
};

export type CourseSection = {
    id: string;
    title: string;
    description: string;
    lessons: CourseLesson[];
};

export type CourseTrack = {
    id: string;
    title: string;
    mainSubject: string;
    sections: CourseSection[];
    required: boolean;
    parentId: string;
};

export type LibraryContentCourse = LibraryContentBase & {
    contentType: 'course';
    prerequisites: string[];
    tracks: CourseTrack[];
};
