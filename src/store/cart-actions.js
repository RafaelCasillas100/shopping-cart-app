import { uiActions } from './ui';
import { cartActions } from './cart';

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch('https://redux-605d1-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) throw new Error('Sending cart data failed.');
      const data = await response.json();
      return data;
    }

    try {
      const cartData = await sendRequest();
      dispatch(cartActions.updateCart({
        ...cartData,
        items: cartData.items || []
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!'
    }));

    const sendRequest = async () => {
      const response = await fetch('https://redux-605d1-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) throw new Error('Sending cart data failed.');
    }

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    }
  }
};