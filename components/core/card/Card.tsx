type Props = {
  title: string;
  subTitle: string;
  color: "primary" | "secondary" | "tertiary";
}

const Card = ({ title, subTitle, color }: Props) => {

  function capitalize(s: string) {
    return s && s[0].toUpperCase() + s.slice(1);
  }

  return (
    <div className={`m-10 p-5 w-48 h-32 bg-light-surface-${color} dark:bg-dark-surface-${color} flex-col rounded-lg flex items-center justify-center gap-2`}>
      <p className={`font-inter text-lg font-bold font text-light-${color}-main dark:text-dark-${color}-main`}>
        {title}
      </p >
      <p className={`font-bold text-light-surface-on${capitalize(color)} dark:text-dark-surface-on${capitalize(color)}`}>
        {subTitle}
      </p>
    </div >
  )
}

export default Card