"use client";

import { useState } from "react";
import CartOrder from "@/components/CartOrder";
import ProductCart from "@/components/ProductCart";

const dataCart = [
    {
        id: 1,
        img: 'macbook.jpg',
        title: 'Apple MacBook Air 13',
        count: 1,
        price: 100000,
        priceTotal: 200000,
        descriptions: 'Дисплей с диагональю 13,3 дюйма, подсветкой LED и технологией IPS; разрешение 2560×1600 пикселей  обеспечивает высокое качество цветопередачи с миллионами цветов',
    },
    {
        id: 2,
        img: 'apple-watch.jpg',
        title: 'Apple watch',
        count: 1,
        price: 29000,
        priceTotal: 29000,
        descriptions: 'Это мощное устройство для здорового образа жизни. Изящный стиль. Эффектный вид.',
    },
    {
        id: 3,
        img: 'mac-pro.jpg',
        title: 'Mac Pro',
        count: 1,
        price: 190000,
        priceTotal: 190000,
        descriptions: 'Потрясающая производи­тельность, невероятный потенциал расширения системы и создания пользо­вательских конфигураций. С Mac Pro для многих профи невозможное станет возможным.',
    },
];

export const metadata = {
    title: 'Корзина | Next13 App',
    description: 'Тестовое приложение Next JS 13',
}

export default function Cart() {
    
const [cart, setCart] = useState(dataCart);

// удаление товара из корзины
const deleteProduct = (id) => {
    console.log('delete', id);
    setCart((cart) => cart.filter((product) => id !== product.id));
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
                <div>
                    {products}
                </div>
                <CartOrder />
            </div>
        </>
    )
}