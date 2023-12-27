import { PatchNote } from '@/types';

export const patchNoteDictionary: Record<string, PatchNote> = {
    '1.0.0': {
        version: '1.0.0',
        authorId: '65638253d365cb85e4984374',
        introSection: {
            paragraphs: [
                'In an effort to simplify the Career Stats tab in the client...',
                'In an effort to simplify the Career Stats tab in the client...',
            ],
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
    '4.1.0': {
        version: '4.1.0',
        authorId: '65638253d365cb85e4984374',
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
                            'In an effort to simplify the 4.1 Stats tab in the client...',
                        ],
                    },
                    {
                        title: 'Bug Fixes',
                        list: ['fix Bug1 4.1', 'fix Bug2 4.1', 'fix Bug2 4.1'],
                    },
                ],
            },
            {
                title: 'Feature',
                content: [
                    {
                        title: 'Intro Features',
                        list: [
                            'In an effort to simplify intro 4.1 the Career Stats tab in the client...',
                        ],
                    },
                    {
                        title: 'Features',
                        list: [
                            'Feature 1 - 4.1',
                            'Feature 2 - 4.1',
                            'Feature 3 - 4.1',
                        ],
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
};

// const patchNotes: PatchNote[] = [
//     {
//         version: '1.0.0',
//         introSection: {
//             paragraphs: ['Intro section'],
//         },
//         contentSecions: [
//             {
//                 title: 'BugFixed',
//                 content: [
//                     {
//                         title: 'BugFixed',
//                         list: [
//                             'In an effort to simplify the Career Stats tab in the client...',
//                         ],
//                     },
//                     {
//                         title: 'Bug Fixes',
//                         list: ['fix Bug1', 'fix Bug2', 'fix Bug2'],
//                     },
//                 ],
//             },
//             {
//                 title: 'Feature',
//                 content: [
//                     {
//                         title: 'Intro Features',
//                         list: [
//                             'In an effort to simplify the Career Stats tab in the client...',
//                         ],
//                     },
//                     {
//                         title: 'Features',
//                         list: ['Feature 1', 'Feature 2', 'Feature 3'],
//                     },
//                 ],
//             },
//             {
//                 title: 'Adjustments',
//                 content: [
//                     {
//                         title: 'Buffs',
//                         list: [
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                         ],
//                     },
//                     {
//                         title: 'nerfs',
//                         list: [
//                             'Heart: 10 ⇒ 2',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                         ],
//                     },
//                     {
//                         title: 'Adjustment',
//                         list: ['we changed memoTheMelo to be more difficult'],
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         version: '4.1',
//         introSection: {
//             paragraphs: ['Intro section'],
//         },
//         contentSecions: [
//             {
//                 title: 'BugFixed',
//                 content: [
//                     {
//                         title: 'BugFixed',
//                         list: [
//                             'In an effort to simplify the 4.1 Stats tab in the client...',
//                         ],
//                     },
//                     {
//                         title: 'Bug Fixes',
//                         list: ['fix Bug1 4.1', 'fix Bug2 4.1', 'fix Bug2 4.1'],
//                     },
//                 ],
//             },
//             {
//                 title: 'Feature',
//                 content: [
//                     {
//                         title: 'Intro Features',
//                         list: [
//                             'In an effort to simplify intro 4.1 the Career Stats tab in the client...',
//                         ],
//                     },
//                     {
//                         title: 'Features',
//                         list: [
//                             'Feature 1 - 4.1',
//                             'Feature 2 - 4.1',
//                             'Feature 3 - 4.1',
//                         ],
//                     },
//                 ],
//             },
//             {
//                 title: 'Adjustments',
//                 content: [
//                     {
//                         title: 'Buffs',
//                         list: [
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                         ],
//                     },
//                     {
//                         title: 'nerfs',
//                         list: [
//                             'Heart: 10 ⇒ 2',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                             'Rumble: Damage Taken: 95% ⇒ 100%',
//                         ],
//                     },
//                     {
//                         title: 'Adjustment',
//                         list: ['we changed memoTheMelo to be more difficult'],
//                     },
//                 ],
//             },
//         ],
//     },
// ];

// export default patchNotes;
