'use client';

import { patchNoteDictionary } from '@mocks';
import { useSession } from 'next-auth/react';
import { ContentSection, HeaderContainer, IntroCard } from './_components';

const page = () => {
    const { data: session } = useSession();
    const patchNote = patchNoteDictionary['1.0.0'];
    const backgroundColorStyle = {
        backgroundColor: 'rgb(0, 9, 19)',
    };
    return (
        <div className='text-white' style={backgroundColorStyle}>
            {/*get from the params the patch note version */}
            <HeaderContainer
                version={patchNote.version}
                authorName={session?.user?.name}
            />
            <IntroCard
                paragraphs={patchNote.introSection.paragraphs}
                authorImage={session?.user?.image || ''}
                authorName={session?.user?.name || ''}
            />

            <div className='flex flex-col box-border w-full m-auto px-[60px] text-left'>
                <div className='mt-10'></div>
                {patchNote.contentSecions.map((section, index) => {
                    return (
                        <ContentSection
                            title={section.title}
                            content={section.content}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default page;
