import { LibraryContentBase } from './index';
import { type LibraryContentModule } from './libraryContentModule';

export type LibraryContentCourse = LibraryContentBase & {
    contentType: 'course';
    modules: LibraryContentModule[];
};
