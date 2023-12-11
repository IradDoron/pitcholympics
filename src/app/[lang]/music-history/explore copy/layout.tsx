type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <h1>Explore</h1>
            {children}
        </div>
    );
};

export default Layout;
