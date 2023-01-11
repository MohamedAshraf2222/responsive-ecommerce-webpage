import React, { useState } from 'react'
import './products.css'
import plane from "../../assets/plane.png";
import { ProductsData } from '../../products';
import { useAutoAnimate } from '@formkit/auto-animate/react'




const Products = () => {
    const [animationParent] = useAutoAnimate()
    const [menuproducts, setMenuProducts] = useState(ProductsData)

    const filter = (type)=> {
        setMenuProducts(ProductsData.filter((product)=>product.type===type))
    }

    return (
        <>
            <div className="products-md px-8 gap-8 relative flex flex-col items-center justify-center">
                <div className="heading-p flex items-center">
                    <img src={plane} alt="" />
                    <h1>Our Feature Products</h1>
                </div>
                <div className="products grid">
                    <ul className='flex flex-col gap-8 font-medium'>
                        <li onClick={()=>{setMenuProducts(ProductsData)}}>All</li>
                        <li onClick={()=>filter('skin care')}>Skin Care</li>
                        <li onClick={()=>filter('conditioner')}>Counditioner</li>
                        <li onClick={()=>filter('foundation')}>Foundation</li>
                    </ul>
                    <div className="list" ref={animationParent}>
                        {menuproducts.map((product, i) => (
                            <div className='s-product'>
                                <div className="product pl-1 flex flex-col justify-between">
                                    <div className='name flex flex-col'>
                                        <span className='font-semibold'>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}$</span>
                                    <div>Shop Now</div>

                                </div>
                                <img src={product.img} alt="IMG" className='img-p' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products