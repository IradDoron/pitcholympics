import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <h1>Layout</h1>
            <section>{children}</section>
        </div>
    );
};

export default Layout;
