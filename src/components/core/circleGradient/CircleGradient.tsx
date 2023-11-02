export type ColorVariants = {
  peachLight: string;
  peachDark: string;
  lambadaLight: string;
  lambadaDark: string;
  gradient3Light: string;
  gradient3Dark: string;
  gradient4Light: string;
  gradient4Dark: string;
  goldDark: string;
  goldLight: string;
};

export const colorVariants: ColorVariants = {
  peachLight: 'bg-peach-light',
  peachDark: 'bg-peach-dark',
  goldDark: 'bg-gold-dark',
  goldLight: 'bg-gold-light',
  gradient3Light: 'bg-gradient3-light',
  gradient3Dark: 'bg-gradient3-dark',
  gradient4Light: 'bg-gradient4-light',
  gradient4Dark: 'bg-gradient4-dark',
  lambadaLight: 'bg-lambada-light',
  lambadaDark: 'bg-lambada-dark',
};

interface CircleGradientProps {
  color: keyof ColorVariants;
}

const CircleGradient: React.FC<CircleGradientProps> = ({ color }) => {
  return <div className={`w-24 h-24 rounded-full ${colorVariants[color]}`} />;
};

export default CircleGradient;

// Usage
// <CircleGradient color='peachDark' />
