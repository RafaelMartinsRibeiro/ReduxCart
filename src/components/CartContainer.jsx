import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import { openModal, closeModal } from "../features/cart/modalSlice";
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
            <h2>seu carrinho</h2>
            <h4 className="empty-cart">está vazio!</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>seu carrinho</h2>
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>

            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  total <span>R${total.toFixed(2)}</span>
                </h4>
              </div>

              <button
                onClick={() => dispatch(openModal())}
                className="btn clear-btn"
              >
                limpar carrinho
              </button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
};
