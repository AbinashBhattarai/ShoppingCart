import Button from '../components/Button'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeCart, addCartQuantity, removeCartQuantity } from '../store/cartSlice.js';

export default function cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cartItems.reduce((prev, curr) => {
      return prev + (curr.price * curr.quantity);
    }, 0)
    setTotalPrice(new Intl.NumberFormat("en-us", {currency: "usd", style: "currency"}).format(total));
  }, [cartItems])

  const removeFromCart = (cartItemId) => {
    dispatch(removeCart(cartItemId))
  };

  const addQuantity = (cartItemId) => {
    dispatch(addCartQuantity(cartItemId))
  }
  const removeQuantity = (cartItemId) => {
    dispatch(removeCartQuantity(cartItemId))
  }

  return (
    <div className="w-full px-20 pb-8">
      <div className="text-xl font-bold">Cart</div>

      <div className='w-full mt-10 flex flex-col gap-7'>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className='bg-white flex p-3 items-center justify-between'>
            <div>
              <img src={cartItem.image} alt="product"
                className='h-28 w-32' />
            </div>
            <div className='p-2 text-center font-semibold'>
              {cartItem.category}
            </div>
            <div className='w-42 border-2 flex bg-gray-200'>
              <button onClick={() => addQuantity(cartItem.id)}
                className='text-5xl pb-2 text-white h-full bg-blue-500 border-none px-3'>
                +
              </button>
              <input type="text" value={cartItem.quantity} readOnly
                className='bg-gray-200 w-14 outline-none text-2xl text-center' />
              <button onClick={() => {removeQuantity(cartItem.id)}}
                className='text-5xl pb-2 text-white h-full bg-blue-500 border-none px-3'>
                -
              </button>
            </div>
            <div className='text-center font-semibold text-blue-500'>
              {new Intl.NumberFormat("en-us", {currency: "usd", style: "currency"}).format(cartItem.price)}
            </div>
            <Button name="Remove" handleClick={() => {removeFromCart(cartItem.id)}} />
          </div>
        ))}
      </div>

      <div className=' w-full flex flex-col items-start mt-10'>
        <div className='m-w-[12rem] p-2 text-2xl font-bold bg-blue-500 text-white'>
          Total: {totalPrice}
        </div>
        <Button name="Checkout"/>
      </div>
      
    </div>
  )
}