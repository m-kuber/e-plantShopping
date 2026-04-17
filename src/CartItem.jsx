import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total cost of all items
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.cost.substring(1));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  // Calculate subtotal for each item
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = (e) => {
    alert("Functionality to be added for future reference");
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        amount: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          amount: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Total Cost: ${calculateTotalAmount()}</h3>

          {cartItems.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} width="100" />
              <h4>{item.name}</h4>
              <p>Unit Price: {item.cost}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${calculateTotalCost(item)}</p>

              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleRemove(item)}>Delete</button>
            </div>
          ))}

          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>

          <button onClick={handleCheckoutShopping}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;