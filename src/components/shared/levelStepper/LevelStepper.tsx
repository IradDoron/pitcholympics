import Card from '@core/card';
import Step from './Step';

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

const LevelStepper = ({ currentStep, totalSteps }: Props) => {
	const arr = Array(totalSteps).fill(0);
	return (
		<Card border={true} shadow='large'>
			{arr.map((_, index) => {
				const status = getStepStatus(currentStep, index);
				return <Step key={index} number={index + 1} status={status} />;
			})}
		</Card>
	);
};

export default LevelStepper;
