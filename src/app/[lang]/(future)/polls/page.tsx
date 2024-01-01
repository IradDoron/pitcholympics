import { Locale } from '@/i18n.config';
import { Link } from '@core';

type Props = {
    params: {
        lang: Locale;
    };
};

type Answer = {
    id: number;
    text: string;
    severalchoices: number; 
};

type Poll = {
    id: number;
    question: string;
    answers: Answer[];
    numberofanswers: number;
};

const mockPoll: Poll = {
    id: 1,
    question: "Which game contributed a lot to you?",
    answers: [
        {
            id: 11,
            text: "Memo blocks",
            severalchoices: 0
        },
        {
            id: 12,
            text: "Pitch Catch",
            severalchoices: 0
        },
        {
            id: 13,
            text: "Memo the Melo",
            severalchoices: 0
        },
        {
            id: 14,
            text: "None of them",
            severalchoices: 0
        },
    ],
    numberofanswers: 0
};

const Page = ({ params }: Props) => {
    const { lang } = params;
    return (
        <>
            <h1>Polls Page</h1>
            <ul className='flex gap-4 m-4'>
                <li>
                    <Link
                        url={`/${lang}/polls/create-new-pool/`}
                        label='Create a new pool'
                    />
                </li>
<div>
    <h4>{mockPoll.question}</h4>
</div>
                <li>
                    <Link
                        url={`/${lang}/polls/poll-results/`}
                        label='poll results'
                    />
                </li>
                <li>
                    <Link
                        url={`/${lang}/polls/filling-out/`}
                        label='filling out'
                    />
                </li>
            </ul>
        </>
    );
};

export default Page;
