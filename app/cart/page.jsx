"use client";

import { useState } from "react";
import { deleteItemFromCart } from './../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';

import CartOrder from "@/components/CartOrder";
import ProductCart from "@/components/ProductCart";

export const metadata = {
    title: 'Корзина | Next13 App',
    description: 'Тестовое приложение Next JS 13',
}

export default function Cart() {
    const items = useSelector(state => state.cart.itemInCart);
    const [cart, setCart] = useState(items);
    const dispatch = useDispatch();
    
    // удаление товара из корзины
    const deleteProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id));
        dispatch(deleteItemFromCart(id));
    }

    const products = cart.map((product) => {
        return <ProductCart
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
        />;
    });

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">
                Ваша корзина
            </h1>

            <div className="grid grid-cols-[65%_30%] gap-8 py-8 border-t-2">
               
               {items.length > 0 ?
                (
                    <div>
                        {products}
                    </div>
                )
                : "Ваша корзина пуста"
            }
                <CartOrder />
            </div>
        </>
    )
}