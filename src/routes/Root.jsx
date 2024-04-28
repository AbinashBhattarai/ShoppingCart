import { NavLink, Outlet } from "react-router-dom"
import Cart from '../assets/shopping_cart.svg'
import { useSelector } from 'react-redux'

export default function Root() {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <>
      <header className="w-full px-20 py-7 bg-gray-300 mb-20">
        <nav className="flex justify-between">
          <div className="text-2xl">
            <NavLink to="/">
              REDUX
              <span className="ml-2 text-blue-500 font-bold">
                Store
              </span>
            </NavLink>
          </div>
          <div className="flex justify-between items-center text-xl pr-20">
            <div className="flex gap-10">
              <NavLink to="/" 
                className={({isActive}) => `${isActive ? "border-b-4 border-b-blue-500" : ""}`}>
                Home
              </NavLink>
              <NavLink to="/products"
                className={({isActive}) => `${isActive ? "border-b-4 border-b-blue-500" : ""}`}>
                Product
              </NavLink>
              <NavLink to="/cart"
                className={({isActive}) => `${isActive ? "border-b-4 border-b-blue-500" : ""}`}>
                Cart
              </NavLink>
            </div>
            <div className="ml-10 relative">
              <img src={Cart} alt="cart" />
              <div className="w-6 h-6 text-sm font-semibold rounded-[50%] bg-blue-300 flex justify-center items-center absolute top-[-1rem] right-[-1rem]">
                {cartItems.length}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}