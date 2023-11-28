export type LibraryContentBase = {
    id: string;
    title: string;
    description: string;
    imageURL: string;
    tags: string[];
    mainSubject: string;
    subSubjects: string[];
};

export { type LibraryContentArticle } from './libraryContentArticle';
export { type LibraryContentBook } from './libraryContentBook';
export { type LibraryContentCourse } from './libraryContentCourse';
export { type LibraryContentModule } from './libraryContentModule';
export { type LibraryContentPost } from './libraryContentPost';
