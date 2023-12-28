import { LibraryContentBase } from './index';

export type LibraryContentPost = LibraryContentBase & {
    contentType: 'post';
    content: string;
};
