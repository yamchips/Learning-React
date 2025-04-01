import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [like, changeLike] = useState(false);
  const toggle = () => {
    changeLike(!like);
    onClick();
  };
  if (like) {
    return <AiFillHeart color="red" size={30} onClick={toggle}></AiFillHeart>;
  }
  return <CiHeart color="red" size={30} onClick={toggle} />;
}

export default Like;
