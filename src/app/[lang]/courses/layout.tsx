import PageFiller from '@shared/pageFiller';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <PageFiller />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
