import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CartContainer } from "./components/CartContainer";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((store) => store.modal);
  const { isLoading } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen === true && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
