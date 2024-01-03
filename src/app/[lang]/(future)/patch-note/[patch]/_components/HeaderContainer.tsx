import Image from 'next/image';
import CardImgPatch from '@/assets/patch-notes/CardImgPatch.jpg';

type Props = {
    version: string;
    authorName: string | null | undefined;
};

export const HeaderContainer = ({ version, authorName = '' }: Props) => {
    return (
        //image container
        <div className='flex flex-col w-full justify-center items-center'>
            <Image
                className='h-[500px] object-cover'
                src={CardImgPatch}
                alt='PatchHeader Image'
            />

            {/* title container */}
            <div className='flex flex-col w-full px-14'>
                <div className='border-slate-800 border-x-2 border-t-2'>
                    <span className='-mt-10 font-bold text-7xl justify-center border-t-black items-center w-full flex tracking-wide'>
                        Patch {version} Notes
                    </span>
                </div>
                <div className='flex items-center justify-between border-slate-800 border-t-2 border'>
                    <div>
                        <span className='text-sm px-8'>Social link</span>
                    </div>
                    <div className='p-4 border-x-2 border-slate-800 flex-5 flex-shrink-1 flex-auto justify-center items-center'>
                        <span className='text-sm flex justify-center'>
                            {authorName}
                        </span>
                    </div>
                    <div>
                        <span className='text-sm px-8'>3 Weeks Ago</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
