import { Card } from '@core';
import { Step } from './Step';

type Props = {
    currentStep: number;
    totalSteps: number;
};

const getStepStatus = (currentStep: number, index: number) => {
    if (index < currentStep - 1) {
        return 'passed';
    } else if (index === currentStep - 1) {
        return 'current';
    } else {
        return 'default';
    }
};

export const LevelStepper = ({ currentStep, totalSteps }: Props) => {
    const arr = Array(totalSteps).fill(0);
    return (
        <Card
            border={true}
            shadow='large'
            isWrap={true}
            width='fit'
            className='p-4 gap-4 flex flex-row'>
            {arr.map((_, index) => {
                const status = getStepStatus(currentStep, index);
                return <Step key={index} number={index + 1} status={status} />;
            })}
        </Card>
    );
};
