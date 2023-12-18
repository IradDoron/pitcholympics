export type PatchNoteIntroSection = {
    paragraphs: string[];
};

export type PatchNoteContentSection = {
    title: 'Feature' | 'BugFixed' | 'Adjustments';
    content: PatchNoteContentSectionCatrgory[];
};

export type PatchNoteContentSectionCatrgory = {
    title: string;
    list: string[];
};

export type PatchNote = {
    version: string;
    introSection: PatchNoteIntroSection;
    contentSecions: PatchNoteContentSection[];
};
