import React, { useContext } from 'react'
import { MainDataContext } from '../Contexts/MainContext'
import { NavLink } from 'react-router-dom'
const FProductData = () => {
  let { Products } = useContext(MainDataContext)
  return (
    <>
      {
        Products.filter(p => p.id < 5).map((product, i) => {
          return (
            <NavLink key={i} to={`/${product.id}`}
              className={"rounded-2xl border border-[#cce7d0] my4 py-2.5 px-3  "}
            >
              <img src={product.img} alt={product.name}
                className='rounded-2xl w-71'
              />
              <section className='relative font-bold mt-2' >
                <p> {product.name} </p>
                <p className='pt-2 font-extrabold' > {product.brandName} </p>
                <p> {product.rating} </p>
                <p className='pt-2 text-[#088178] font-extrabold ' > {product.price} </p>

                <button className='rounded-full absolute right-0 bottom-0 bg-[#e3e6f3] flex items-center px-4 py-2 ' >
                  Add to Cart
                </button>
              </section>
            </NavLink>
          )

        })
      }
    </>
  )
}

export default FProductData