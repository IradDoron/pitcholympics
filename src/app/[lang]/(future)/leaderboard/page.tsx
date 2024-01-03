'use client';

const tableData = [
    {
        name: 'מתי כספי',
        score: 1300,
        location: '1',
    },
    {
        name: 'אריק סיני',
        score: 1200,
        location: '2',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '3',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '4',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '5',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '6',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '7',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '8',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '9',
    },
    {
        name: 'איתי גולדברג',
        score: 1100,
        location: '10',
    },
];

const Page = () => {
    return (
        <table className='flex flex-col justify-center items-center gap-4'>
            <thead>
                <tr className='flex flex-row justify-center items-center gap-4'>
                    <th>מיקום</th>
                    <th>שם המשתמש</th>
                    <th>ניקוד</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr
                        key={index}
                        className='flex flex-row justify-center items-center gap-4'>
                        <td>{row.location}</td>
                        <td>{row.name}</td>
                        <td>{row.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Page;
