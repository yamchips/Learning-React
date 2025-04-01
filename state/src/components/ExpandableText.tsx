import React, { ReactNode, useState } from "react";
import style from "./ExpandableText.module.css";
import styled from "styled-components";

interface Props {
  maxChars?: number;
  children: ReactNode;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  const [show, alterShow] = useState(false);
  const maxApplied = maxChars ? maxChars : 50;
  const Truncp = styled.p`
    white-space: ${show ? "normal" : "nowrap"};
    overflow: ${show ? "visible" : "hidden"};
    text-overflow: ${show ? "unset" : "ellipsis"};
    ${show ? "" : "max-width:" + maxApplied + "ch;"}
  `;
  return (
    <>
      <Truncp>{children}</Truncp>
      <button
        onClick={() => {
          alterShow(!show);
        }}
      >
        {show ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
