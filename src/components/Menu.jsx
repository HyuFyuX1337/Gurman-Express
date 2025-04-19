import { useState } from "react";
import menuItems from "../data/index.js";
import { TiShoppingCart } from "react-icons/ti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Menu({ activeCategory, cartDatas, setCartDatas }) {
  const filteredItems = menuItems.filter(
    (menuItem) => menuItem.categoryId == activeCategory
  );

  const getQuantity = (id) => {
    const item = cartDatas.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item) => {
    const exists = cartDatas.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      const updated = cartDatas.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartDatas(localStorage.setItem(JSON.stringify(updated)));
    } else {
      setCartDatas([...cartDatas, { ...item, quantity: 1 }]);
    }
  };

  const handleIncrease = (item) => {
    const updated = cartDatas.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartDatas(updated);
  };
  localStorage.setItem("cartDatas", JSON.stringify(cartDatas))

  const handleDecrease = (item) => {
    const existingItem = cartDatas.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      const updated = cartDatas.filter((cartItem) => cartItem.id !== item.id);
      setCartDatas(updated);
    } else {
      const updated = cartDatas.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartDatas(updated);
    }
  };

  return (
    <div className="sm:p-4 text-white mt-[30px] sm:mt-[40px]">
      <div className="grid gap-[15px] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-[24px]">
        {filteredItems.map((item) => {
          const quantity = getQuantity(item.id);
          return (
            <div
              key={item.id}
              className="card flex flex-col rounded-xl overflow-hidden"
            >
              <div className="object-cover transition-all duration-300 hover:scale-105">
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={`${item.image}`}
                  className="w-full object-cover h-[150px] sm:h-[200px]"
                />
              </div>
              <div className="sm:p-4 p-[7px] h-full flex flex-col">
                <h3 className="text-[14px] font-normal sm:text-[18px] sm:font-semibold">
                  {item.title}
                </h3>
                <p className="text-[10px] font-normal text-[#757575] sm:mb-[5px] sm:text-[14px] sm:font-semibold">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto mb-[5px]">
                  <span className="text-[14px] font-bold sm:text-[18px]">
                    {item.price.toLocaleString("uz-UZ")} сўм
                  </span>
                  <span className="text-[14px] text-[#757575]">
                    {item.weight}
                  </span>
                </div>
                <div className="mt-[5px] h-[40px] sm:h-[45px]">
                  {quantity > 0 ? (
                    <div className="flex items-center justify-between w-full bg-[#72A479] text-white font-semibold px-3 py-[4px] sm:py-[8px] rounded transition">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="px-[6px] text-[16px]"
                      >
                        -
                      </button>
                      <span className="text-[14px]">{quantity}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="px-[6px] text-[16px]"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="card-btn flex gap-[8px] text-[12px] font-semibold justify-center items-center w-full text-white py-[4px] sm:py-[8px] sm:text-[16px] rounded transition"
                    >
                      В корзину
                      <TiShoppingCart className="text-[16px] sm:text-[22px]" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
