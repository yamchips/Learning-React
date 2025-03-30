import { useState } from "react";
import { MouseEvent } from "react";

// TypeScript feature, input of the component
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// In react, one component can only return one element
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = -1; // this way doesn't work, use state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
              // handleClick(e);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
