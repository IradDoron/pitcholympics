import { PatchNote } from '@/types';

const patchNotes: PatchNote[] = [
    {
        version: '1.0.0',
        introSection: {
            paragraphs: ['Intro section'],
        },
        contentSecions: [
            {
                title: 'BugFixed',
                content: [
                    {
                        title: 'BugFixed',
                        list: [
                            'In an effort to simplify the Career Stats tab in the client...',
                        ],
                    },
                    {
                        title: 'Bug Fixes',
                        list: ['fix Bug1', 'fix Bug2', 'fix Bug2'],
                    },
                ],
            },
            {
                title: 'Feature',
                content: [
                    {
                        title: 'Intro Features',
                        list: [
                            'In an effort to simplify the Career Stats tab in the client...',
                        ],
                    },
                    {
                        title: 'Features',
                        list: ['Feature 1', 'Feature 2', 'Feature 3'],
                    },
                ],
            },
            {
                title: 'Adjustments',
                content: [
                    {
                        title: 'Buffs',
                        list: [
                            'Rumble: Damage Taken: 95% ⇒ 100%',
                            'Rumble: Damage Taken: 95% ⇒ 100%',
                            'Rumble: Damage Taken: 95% ⇒ 100%',
                        ],
                    },
                    {
                        title: 'nerfs',
                        list: [
                            'Heart: 10 ⇒ 2',
                            'Rumble: Damage Taken: 95% ⇒ 100%',
                            'Rumble: Damage Taken: 95% ⇒ 100%',
                        ],
                    },
                    {
                        title: 'Adjustment',
                        list: ['we changed memoTheMelo to be more difficult'],
                    },
                ],
            },
        ],
    },
];

export default patchNotes;
