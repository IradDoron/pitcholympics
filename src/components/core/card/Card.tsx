type Props = {
  title: string;
  subTitle: string;
  color: "primary" | "secondary" | "tertiary";
}

const Card = ({ title, subTitle, color }: Props) => {

  function capitalize(s: string) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  const colorVariants = {
    primary: {
      bg: 'bg-light-surface-primary dark:bg-dark-surface-primary',
      text: 'text-light-primary-main text-dark-primary-main',
      subtext: 'text-light-surface-onPrimary dark:text-dark-surface-onPrimary',
    },
    secondary: {
      bg: 'bg-light-surface-secondary dark:bg-dark-surface-secondary',
      text: 'text-light-secondary-main text-dark-secondary-main',
      subtext: 'text-light-surface-onSecondary dark:text-dark-surface-onSecondary',
    },
    tertiary: {
      bg: 'bg-light-surface-tertiary dark:bg-dark-surface-tertiary',
      text: 'text-light-tertiary-main text-dark-tertiary-main',
      subtext: 'text-light-surface-onTertiary dark:text-dark-surface-onTertiary',
    }
  }

  return (
    <div className={`drop-shadow-xl	m-10 p-5 w-full h-32 flex-col rounded-lg flex items-center justify-center gap-2 ${colorVariants[color].bg} `} >
      <p className={`font-inter text-lg font-bold font ${colorVariants[color].text}`}>
        {title}
      </p >
      <p className={`font-bold ${colorVariants[color].subtext}`}>
        {subTitle}
      </p>
    </div >
  )
}

export default Card