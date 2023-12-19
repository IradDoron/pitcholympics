import { type ContentElement } from './contentElements';
import { LibraryContentBase } from './index';

export type BookSectionChapter = {
    sectionType: 'chapter';
    title: string;
    description: string;
    content: ContentElement[];
};

export type BookSectionIntro = {
    sectionType: 'intro';
    title: string;
    description: string;
    content: ContentElement[];
};

export type BookSectionSummary = {
    sectionType: 'summary';
    title: string;
    description: string;
    content: ContentElement[];
};

export type BookSection =
    | BookSectionChapter
    | BookSectionIntro
    | BookSectionSummary;

export type LibraryContentBook = LibraryContentBase & {
    contentType: 'book';
    chapters: BookSection[];
};
