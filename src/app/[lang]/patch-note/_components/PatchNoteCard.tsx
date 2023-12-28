'use client';
import Image from 'next/image';
import CardImg from '@/assets/patch-notes/CardImg.jpg';
import { useRouter } from 'next/navigation';
import { Locale } from '@/i18n.config';

type Props = {
    lang: Locale;
};

const PatchNoteCard = ({ lang }: Props) => {
    const router = useRouter(); // Next.js router

    const patchNote = '4.1';

    const clickHandler = () => {
        router.push(`/${lang}/patch-note/${patchNote}`);
    };

    return (
        <div className='flex flex-wrap px-10 gap-10 justify-center items-center'>
            <div onClick={clickHandler} className='cursor-pointer'>
                <Image
                    className='hover:animate-scaleUp'
                    src={CardImg}
                    width={400}
                    height={400}
                    alt='Picture of the author'
                />
                <div className='flex flex-col items-end px-5'>
                    <p className='font-bold text-medium mt-3'>
                        Patch 1.1 Notes
                    </p>
                    <p className='text-sm mt-2'>Amit Halevi - 2 Weeks Ago</p>
                </div>
            </div>
            <div>
                <Image
                    className='cursor-pointer hover:animate-scaleUp'
                    src={CardImg}
                    width={400}
                    height={400}
                    alt='Picture of the author'
                />
                <div className='flex flex-col items-end px-5'>
                    <p className='font-bold text-medium mt-3'>
                        Patch 1.1 Notes
                    </p>
                    <p className='text-sm mt-2'>Amit Halevi - 2 Weeks Ago</p>
                </div>
            </div>
            <div>
                <Image
                    className='cursor-pointer hover:animate-scaleUp'
                    src={CardImg}
                    width={400}
                    height={400}
                    alt='Picture of the author'
                />
                <div className='flex flex-col items-end px-5'>
                    <p className='font-bold text-medium mt-3'>
                        Patch 1.1 Notes
                    </p>
                    <p className='text-sm mt-2'>Amit Halevi - 2 Weeks Ago</p>
                </div>
            </div>
            <div>
                <Image
                    className='cursor-pointer hover:animate-scaleUp'
                    src={CardImg}
                    width={400}
                    height={400}
                    alt='Picture of the author'
                />
                <div className='flex flex-col items-end px-5'>
                    <p className='font-bold text-medium mt-3'>
                        Patch 1.1 Notes
                    </p>
                    <p className='text-sm mt-2'>Amit Halevi - 2 Weeks Ago</p>
                </div>
            </div>
        </div>
    );
};

export default PatchNoteCard;
