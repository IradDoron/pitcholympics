import { LibraryContentCourse } from '@types';

const musicCourse: LibraryContentCourse = {
    id: '1',
    title: 'Music Theory 101',
    description:
        'Learn the fundamental principles of music theory to enhance your musical skills.',
    imageURL: 'https://example.com/music-theory-101.jpg',
    tags: ['music', 'theory', 'education'],
    mainSubject: 'Music',
    contentType: 'course',
    prerequisites: ['basic musical knowledge'],
    tracks: [
        {
            id: '101',
            title: 'Basic Concepts',
            mainSubject: 'Music Theory',
            sections: [
                {
                    id: '1',
                    title: 'Introduction to Notes and Scales',
                    description:
                        'Understand the basics of musical notes and scales.',
                    lessons: [
                        {
                            id: '1',
                            title: 'Understanding Musical Notes',
                            description:
                                'Learn about the different musical notes and their symbols.',
                            modulesIds: ['101', '102'],
                        },
                        // Add more lessons as needed
                    ],
                },
                {
                    id: '2',
                    title: 'Chords and Harmony',
                    description:
                        'Explore the world of chords and how harmony is created in music.',
                    lessons: [
                        {
                            id: '2',
                            title: 'Building Chords',
                            description:
                                'Study the construction of basic chords and chord progressions.',
                            modulesIds: ['103', '104'],
                        },
                        // Add more lessons as needed
                    ],
                },
                // Add more sections as needed
            ],
            required: true,
            parentId: '1',
        },
        {
            id: '102',
            title: 'Advanced Techniques',
            mainSubject: 'Music Theory',
            sections: [
                // Add sections, lessons, and modules as needed
            ],
            required: false,
            parentId: '101',
        },
        // Add more tracks as needed
    ],
};

export const courses: LibraryContentCourse[] = [musicCourse];
