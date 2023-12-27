import ContentContainer from '@/components/shared/PatchNotePage/ContentContainer';
import HeaderContainer from '@/components/shared/PatchNotePage/HeaderContainer';

const page = () => {
    const backgroundColorStyle = {
        backgroundColor: 'rgb(0, 9, 19)',
    };
    return (
        <div className='text-white' style={backgroundColorStyle}>
            <HeaderContainer />
            <ContentContainer />
        </div>
    );
};

export default page;
