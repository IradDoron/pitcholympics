type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
