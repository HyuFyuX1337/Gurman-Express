import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import Tabs from "../components/Tabs";
import Menu from "../components/Menu";

function Home({ cartDatas, setCartDatas }) {
  console.log(cartDatas);

  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <>
      <HeroSlider />
      <div className="container">
        <Tabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Menu
          setCartDatas={setCartDatas}
          cartDatas={cartDatas}
          activeCategory={activeCategory}
        />
      </div>
    </>
  );
}

export default Home;
