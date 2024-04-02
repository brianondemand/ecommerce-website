import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProp {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButtton: React.FC<IconButtonProp> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
      )}
    >
      {icon}
    </button>
  );
};

export default IconButtton;
