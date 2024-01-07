import { Button as CoreButton } from '@core';
import { useTheme } from '@mui/system';

type Props = {
    state: 'clicked' | 'default';
} & React.ComponentProps<typeof CoreButton>;

export const VoteButton = ({ state, onClick, label }: Props) => {
    const theme = useTheme();

    const getBackgroundColor = (state: 'clicked' | 'default') => {
        switch (state) {
            case 'clicked':
                return theme.palette.primary.main;
            case 'default':
                return theme.palette.primary.light;
            default:
                return theme.palette.primary.light; // default
        }
    };

    return (
        <CoreButton
            onClick={onClick}
            label={label}
            styles={`background-color: ${getBackgroundColor(state)};`}
        />
    );
};
