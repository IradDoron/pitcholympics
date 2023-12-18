import { LibraryContentTestQuestion } from './libraryContentTest';

export type PostType = {
   // type: 'post';
    title: string;
    description: string;
    topic: string;
    tags: string[];
    content: string;
    // content: RichText[];
};

export type RichTextElement =
    | { type: 'text'; content: string }
    | { type: 'bold'; content: RichText[] }
    | { type: 'italic'; content: RichText[] }
    | { type: 'underline'; content: RichText[] }
    | { type: 'link'; content: RichText[]; url: string }
    | { type: 'emoji'; emoji: string }
    | { type: 'code'; content: RichText[] }
    | { type: 'quote'; content: RichText[] }
    | { type: 'highlight'; content: RichText[] }
    | { type: 'marker'; content: RichText[] };

type RichText = RichTextElement[];

export type VideoElement = {
    type: 'video';
    url: string;
};

export type OrderedListElement = {
    type: 'orderedList';
    content: RichText[][]; // Each element is a list item
};

export type UnorderedListElement = {
    type: 'unorderedList';
    content: RichText[][]; // Each element is a list item
};

export type ImageElement = {
    type: 'image';
    url: string;
};

export type VideoGalleryElement = {
    type: 'videoGallery';
    videos: VideoElement[];
};

export type ImageGalleryElement = {
    type: 'imageGallery';
    images: ImageElement[];
};

export type HideAnswerQuizElement = {
    type: 'hideAnswerQuiz';
    question: string;
    answer: string;
};

export type QuestionElement =
    | LibraryContentTestQuestion
    | HideAnswerQuizElement;

export type ContentElement =
    | RichTextElement
    | VideoElement
    | OrderedListElement
    | UnorderedListElement
    | ImageElement
    | VideoGalleryElement
    | ImageGalleryElement
    | QuestionElement;
