import React from 'react';

type Props = {
  children: React.ReactNode;
};

const LevelsLinksContainer = ({ children }: Props) => {
  return (
    <div className="flex justify-center flex-wrap gap-1 items-center h-22 w-32 bg-gray-200 relative ">
      {children}
    </div>
  );
};

export default LevelsLinksContainer;
