// CartWidget.js


const CartWidget = () => {
  const cartItemCount = 5; 

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
