import { useState, useEffect } from "react";
import Korzina from "../assets/images/korzina.png";

const Cart = ({ setCartDatas }) => {
  const cartDatas = JSON.parse(localStorage.getItem("cartDatas")) || [];
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalAmount = cartDatas.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, [cartDatas]);
  const increaseQty = (id) => {
    setCartDatas((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQty = (id) => {
    setCartDatas((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container">
      <div className="py-[50px]">
        <h1 className="pl-[10px] rounded-[2px] w-[10px] bg-[#72A479] text-white text-[32px] font-bold">
          Корзина
        </h1>
      </div>

      {(cartDatas || []).length === 0 ? (
        <div className="flex flex-col justify-center text-center mt-[50px]">
          <img
            src={Korzina}
            alt="korzinaImg"
            className="mx-auto w-[200px]"
            draggable="false"
          />
          <h4 className="mt-[10px] font-bold text-[#757575] text-[30px]">
            Ваша корзина пуста :(
          </h4>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartDatas.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 shadow rounded-xl"
                style={{
                  background:
                    "linear-gradient(90deg, #494544 0%, #504B4A 100%)",
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      {item.price.toLocaleString("uz-UZ")} so‘m
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 border bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">
              Jami: {total.toLocaleString("uz-UZ")} сўм
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
