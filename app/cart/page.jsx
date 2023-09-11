"use client";

import { useState, useEffect  } from "react";
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
    const [cart, setCart] = useState(() => items);
    const dispatch = useDispatch();

    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
        count: cart.reduce((prev, curr) => prev + curr.count, 0)
    });

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
            count: cart.reduce((prev, curr) => prev + curr.count, 0),
        });
    }, [cart]);
    
    // удаление товара из корзины
    const deleteProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id));
        dispatch(deleteItemFromCart(id));
    }

    // увеличения счетчика количества продукта
    function increase(id) {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count + 1,
                        priceTotal: (product.count + 1) * product.price,
                    };
                }
                return product;
            });
        });
    }

    // уменьшение счетчика количества продукта
    const decrease = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {

                    // const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
                    const newCount = product.count - 1 >= 1 ? product.count - 1 : 1;

                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price,
                    };
                }
                return product
            })
        })
    }

    // обработчик ввода в инпут
    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product
            })
        })
    }

    const products = cart.map((product) => {
        return <ProductCart
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
           changeValue={changeValue}
            increase={increase}
            decrease={decrease}
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
                <CartOrder total={total} />
            </div>
        </>
    )
}