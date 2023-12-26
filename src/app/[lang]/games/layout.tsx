
import { PageFiller } from '@shared';
import { getServerSession } from "next-auth/next";

export default async function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    return (
      <div>
        <PageFiller />
        <p className='text-center text-xl text-light-background-onDefault dark:text-dark-background-onDefault'>You need to be logged in to see this page</p>
      </div>
    )
  }

  return (
    <>
      {children}
    </>
  );
}