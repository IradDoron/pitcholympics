import PageFiller from '@/components/shared/pageFiller';
import { Text } from '@core';
import { Date } from 'mongoose';

type WebsiteAnalyticsDocument = {
    userId: string;
    date: Date;
    activity: 'enter-website' | 'leave-website';
};

const Page = () => {
    return (
        <>
            <PageFiller />
            <Text>Website Analytics</Text>
        </>
    );
};

export default Page;
