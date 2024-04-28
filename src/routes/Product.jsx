import { useEffect, useState } from 'react'
import Button from '../components/Button.jsx'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/cartSlice.js';

export default function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
  })

  const addToCart = (product) => {
    dispatch(addCart(product))
  }

  return(
    <div className="w-full px-20 pb-8">
      <div className="text-xl font-bold">Products</div>

      <div className="w-full pt-12 flex justify-start gap-8 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-56 h-76 bg-white flex flex-col items-center p-5">
            <div>
              <img src={product.image} alt="product"
                className='h-32 w-32' 
              />
            </div>
            <div className='p-2 text-center font-semibold'>
              {product.category}
            </div>
            <div className='text-center font-semibold text-blue-500'>
              {new Intl.NumberFormat("en-us", {currency: "usd", style: "currency"}).format(product.price)}
            </div>
            <Button name="Add to cart" handleClick={() => addToCart(product)} />
          </div>
        ))} 
      </div>

    </div>
  )
}