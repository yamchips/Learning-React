import React, { useState } from "react";
// 1. use vanilla css
// import "./ListGroup.css";
// 2. use css module to pack all css style in one file
import style from "./ListGroup.module.css";
// 3. use css-in-js, here we use library styled-components
import styled from "styled-components";
// 4. use inline style, not recommended

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  background: ${(props) => (props.active ? "blue" : "yellow")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* <ul className={[style["list-group"], style.container].join(" ")}> */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
