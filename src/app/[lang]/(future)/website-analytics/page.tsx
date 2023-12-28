import { Text } from '@core';
import { Date } from 'mongoose';

type WebsiteAnalyticsDocument = {
    userId: string;
    date: Date;
    activity: 'enter-website' | 'leave-website';
};

const Page = () => {
    return <Text>Website Analytics</Text>;
};

export default Page;
