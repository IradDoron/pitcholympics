import {
    Button as BaseButton,
    ButtonClasses,
    buttonClasses,
} from '@mui/base/Button';
import { Button as MaterialButton } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

type Props = {
    url: string;
    state: 'passed' | 'current' | 'failed' | 'locked';
    level: number;
};

type ButtonProps = {
    myClasses?: string;
} & ButtonClasses;

const Button = styled(BaseButton)(
    ({ theme }) => `
    ${buttonClasses.root} {
        min-width: 0;
        padding: 0;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }
    &.locked {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 9999px;
        width: 1.25rem;
        height: 1.25rem;
        text-align: center;
        color: #ffffff;
        background-color: #6b7280;
    }
`,
);

function LevelLink({ url, state, level }: Props) {
    return (
        (state === 'locked' && (
            <div className='w-5 h-5 rounded-full bg-gray-500 text-white text-center flex justify-center items-center'>
                {level}
            </div>
        )) ||
        (state === 'failed' && (
            <Link
                className='w-5 h-5 rounded-full bg-red-500 text-white text-center flex justify-center items-center'
                href={url}>
                {level}
            </Link>
        )) ||
        (state === 'current' && (
            <Link
                className='w-5 h-5 rounded-full bg-yellow-500 text-white text-center flex justify-center items-center'
                href={url}>
                {level}
            </Link>
        )) ||
        (state === 'passed' && (
            <Link
                className='w-5 h-5 rounded-full bg-green-500 text-white text-center flex justify-center items-center'
                href={url}>
                {level}
            </Link>
        ))
    );
}

export default LevelLink;
