import { useState } from "react";
import "./App.css";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Expandable from "./components/Expandable";

function App() {
  // exercise 4, expanable text

  // exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const changeCart = () => {
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity = 2;
      })
    );
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  // exercise 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const addToppings = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    setPizza(
      produce((draft) => {
        draft.toppings.push("Cheese");
      })
    );
  };

  // exercise 1
  const [game, setGame] = useState({ id: 1, player: { name: "John" } });
  const handleClick2 = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Bob" },
    });
    setGame(
      produce((draft) => {
        draft.player.name = "Bob";
      })
    );
  };

  // share state between components
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // update array of objects
  // use immer library to simplify code
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);
  const updateArrOfObj = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  // update array
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const updateArray = () => {
    // add
    setTags([...tags, "new item"]);

    // remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // update
    setTags(tags.map((tag) => (tag === "cheerful" ? "cheerfulness" : tag)));
  };

  // nested objects
  const [customer, setCustomer] = useState({
    name: "John",
    address: { city: "New York", zipCode: 94111 },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  // keep components pure
  // react render component twice and only show second result
  const [isVisible, setVisibility] = useState(false);

  let count = 0;
  const handleClick1 = () => {
    setVisibility(!isVisible);
    count++;
    console.log(isVisible, count); // count is always 1
  };

  return (
    <>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={updateArrOfObj}>Click Me!</button>
      <ExpandableText maxChars={50}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        esse laudantium, nisi nostrum sunt saepe pariatur non est fuga,
        architecto dolores ab illo nam, magnam doloribus. Quas qui cumque ad.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        perferendis aperiam ad sapiente repellat odit. Nisi cumque iure illo
        deserunt itaque, inventore, sapiente beatae consequuntur corrupti ea
        fugit distinctio. A!
      </ExpandableText>
      <Expandable maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        debitis perspiciatis reprehenderit optio rerum similique? Quas ea, enim
        ducimus commodi culpa corporis assumenda, asperiores harum dolore
        aperiam quia voluptas veritatis unde quam corrupti, minima facilis atque
        reiciendis? Qui incidunt provident blanditiis nesciunt dicta ducimus
        natus sequi et neque quam ipsum, tempore veritatis mollitia similique!
        Assumenda voluptate architecto sapiente, at aut ipsam, nobis, quos nemo
        aspernatur sequi expedita earum atque magnam qui soluta sunt veritatis
        pariatur ut esse quas eum rem. Vitae similique, excepturi eius quod
        repellendus consequatur. Libero, fuga hic voluptates nesciunt in qui,
        voluptatem animi similique esse, aliquid cupiditate?
      </Expandable>
    </>
  );
}

export default App;
