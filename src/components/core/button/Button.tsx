type BtnSize = "small" | "medium" | "large";


type Props = {
  label: string;
  onClick: () => void;
  size?: BtnSize
}

const Button = ({ label, onClick, size = "medium" }: Props) => {

  const getSize = (size: BtnSize) => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-xs";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-xl";
      default:
        return "px-6 py-3 text-xl";
    }
  }
  const buttonSize = getSize(size);
  return (
    <button onClick={onClick} className={`bg-light-primary-main dark:bg-dark-primary-main rounded-[12px] text-light-primary-contrastText dark:text-dark-primary-contrastText ${buttonSize}`}>
      {label}
    </button>
  )
}

export default Button