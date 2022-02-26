import { IoIosRefresh } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";

import { Button } from "./styles";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
  icon?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function ComponentButton({
  buttonType,
  icon,
  onClick,
  children,
  ...rest
}: IButton) {
  const arrow = <BiRightArrowAlt size={22} />;
  const check = <AiOutlineCheck size={22} />;
  const refresh = <IoIosRefresh size={22} />;

  return (
    <Button buttonType={buttonType} icon={icon} onClick={onClick} {...rest}>
      {children}
      {icon && (
        <span title="icon">
          <>
            {icon === "arrow-right"
              ? arrow
              : icon === "check"
              ? check
              : refresh}
          </>
        </span>
      )}
    </Button>
  );
}
