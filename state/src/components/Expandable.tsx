import React from "react";
import { useState } from "react";
// solution

interface Props {
  children: string;
  maxChars?: number;
}
const Expandable = ({ children, maxChars = 50 }: Props) => {
  if (children.length < maxChars) {
    return <p>{children}</p>;
  }
  const [show, alterShow] = useState(false);
  const text = show ? children : children.substring(0, maxChars);

  return (
    <>
      <p>{text}...</p>
      <button onClick={() => alterShow(!show)}>{show ? "Less" : "More"}</button>
    </>
  );
};

export default Expandable;
