export type LibraryContentBase = {
    id: string;
    title: string;
    description: string;
    imageURL: string;
    tags: string[];
    mainSubject: string;
};

export * from './libraryContentArticle';
export * from './libraryContentBook';
export * from './libraryContentCourse';
export * from './libraryContentModule';
export * from './libraryContentPost';
