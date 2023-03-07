import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

const CartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.quantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button >
  );
};

export default CartButton;
