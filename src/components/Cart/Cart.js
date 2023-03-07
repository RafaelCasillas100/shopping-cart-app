import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  const itemsList = items.map(item => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price
      }}
    />
  ))
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsList}
      </ul>
    </Card>
  );
};

export default Cart;
