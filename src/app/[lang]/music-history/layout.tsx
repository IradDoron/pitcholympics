import { PageFiller } from '@shared';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <PageFiller />
            {children}
        </>
    );
};

export default Layout;
