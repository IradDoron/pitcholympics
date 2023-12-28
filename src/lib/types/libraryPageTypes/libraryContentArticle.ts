import { ContentElement } from './contentElements';
import { LibraryContentBase } from './index';

export type LibraryContentArticle = LibraryContentBase & {
    contentType: 'article';
    title: string;
    summary: string;
    content: ContentElement[];
};
