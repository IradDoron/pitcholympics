export type Props = {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
};

export const MenubarItem = ({ label, icon, onClick }: Props) => {
    return (
        <div className='flex flex-row items-center gap-2' onClick={onClick}>
            <div>{icon}</div>
            <div>{label}</div>
        </div>
    );
};
