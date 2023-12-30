import { auth } from '@/app/api/auth/[...nextauth]/auth';

export default async function GamesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session) {
        return (
            <div>
                <p className='text-center text-xl text-light-background-onDefault dark:text-dark-background-onDefault'>
                    You need to be logged in to see this page
                </p>
            </div>
        );
    }

    return <>{children}</>;
}
