import "./App.css";
import Product from "./Components/Product";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  //initialization:

  const [items] = useState([
    {
      imgsrc:
        "https://i.pinimg.com/originals/78/09/45/780945db5e2b93232c2663ba89841f9f.jpg",
      name: "Logitech POP Mouse",
      price: "$40.00",
      addedToCart: false,
    },
    {
      imgsrc:
        "https://i.pinimg.com/originals/de/f4/f1/def4f1d0f31f854efc2d2b448faaf1bf.jpg",
      name: "Logitech POP Keyboard",
      price: "$99.99",
      addedToCart: false,
    },
    {
      imgsrc:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1645138486301",
      name: "Apple Magic Mouse 2",
      price: "$80.00",
      addedToCart: false,
    },
    {
      imgsrc:
        "https://cdn.shopify.com/s/files/1/0189/1402/products/neon.key.pink6_301x@3x.progressive.jpg?v=1571438587",
      name: "Colored - MacBook Keyboard",
      price: "$120.00",
      addedToCart: false,
    },
  ]);
  // cart Count details:

  const [cart, setCart] = useState(0); //by default cart value is 0;

  // call back () will call by child with child to parent passing data;

  const Child = (data, name) => {
    setCart(cart + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };

  return (
    <div className="App">
      <Nav cartCount={cart} />
      <div className="cardContainer">
        {items.map((item, index) => {
          return <Product key={index} value={item} parent={Child} />;
        })}
      </div>
    </div>
  );
}

export default App;
