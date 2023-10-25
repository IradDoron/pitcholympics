import React from 'react';
import Link from 'next/link';

type Props = {
  url: string;
};

const ArrowLink = ({ url }: Props) => {
  return (
    <>
      <Link href={'http://www.google.com'}>
        <div className="w-[100px] h-[40px] bg-black relative">
          <div className="w-0 h-5 border-l-[30px] border-t-[30px] border-t-transparent border-b-transparent border-b-[30px] border-r-[30px] border-l-dark-100 border-r-transparent absolute top-[-25%] right-[-50%] bg-transparent"></div>
        </div>
      </Link>
    </>
  );
};

export default ArrowLink;
