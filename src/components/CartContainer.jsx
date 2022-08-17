import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, calculateTotals } from "../features/cart/cartSlice";
import { CartItem } from "./CartItem";

export const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      {amount < 1 ? (
        <section className="cart">
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>your bag</h2>
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  total <span>${total.toFixed(2)}</span>
                </h4>
              </div>

              <button
                onClick={() => dispatch(clearCart())}
                className="btn clear-btn"
              >
                clear cart
              </button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
};
