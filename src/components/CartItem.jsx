import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">R${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          Remover
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increase(id))} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={() => dispatch(decrease(id))} className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
