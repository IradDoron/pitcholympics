import { ContentElement } from './contentElements';
import { LibraryContentBase } from './index';

export type ModuleSectionBase = {
    title: string;
    description: string;
    summary: string;
};

export type ModuleSectionIntro = ModuleSectionBase & {
    sectionType: 'intro';
    content: ContentElement[];
};

export type ModuleSectionSummary = ModuleSectionBase & {
    sectionType: 'summary';
    content: ContentElement[];
};

export type ModuleSectionQuiz = ModuleSectionBase & {
    sectionType: 'quiz';
    content: ContentElement[];
};

export type ModuleSectionChapter = ModuleSectionBase & {
    sectionType: 'chapter';
    content: ContentElement[];
};

export type ModuleSection =
    | ModuleSectionIntro
    | ModuleSectionSummary
    | ModuleSectionQuiz
    | ModuleSectionChapter;

export type LibraryContentModule = LibraryContentBase & {
    contentType: 'module';
    sections: ModuleSection[];
};
