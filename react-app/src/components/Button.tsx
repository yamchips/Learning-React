import { Children } from "react";

interface Props {
  color?: "primary" | "secondary";
  children: string;
  onClick: () => void;
}
function Button({ color = "primary", children, onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
