import { Box, BoxProps } from '@mui/material';

export const Center = ({ children, sx, ...props }: BoxProps) =>
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>