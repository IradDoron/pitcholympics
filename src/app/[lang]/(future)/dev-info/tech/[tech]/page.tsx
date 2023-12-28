import { Link } from '@core';

type ProjectTechInfo = {
    [key: string]: {
        driveFolderLink: string;
    };
};

const projectTechInfo = {
    nextjs: {
        driveFolderLink:
            'https://drive.google.com/drive/folders/1S6pUCSa7V6SuutCUrezA2LIBHMND9jYy?usp=drive_link',
    },
} as ProjectTechInfo;

type Props = {
    params: {
        tech: string;
    };
};

const Page = ({ params }: Props) => {
    const { tech } = params;

    const hasTech = Object.prototype.hasOwnProperty.call(projectTechInfo, tech);

    if (!hasTech) {
        return (
            <div>
                <h1>There is no data for {tech} yet</h1>
            </div>
        );
    }

    const techData = projectTechInfo[tech];

    return (
        <div>
            <h1>{tech}</h1>
            <Link
                newTab={true}
                url={techData.driveFolderLink}
                label={`${tech} Drive Folder`}
            />
        </div>
    );
};

export default Page;
