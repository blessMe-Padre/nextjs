"use client";
const dataCart = [
    {
        id: 1,
        img: 'macbook.jpg',
        title: 'Apple MacBook Air 13',
        count: 1,
        price: 100000,
        priceTotal: 100000,
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

import { useState } from "react";
import ProductItem from "@/components/ProductItem";

export const metadata = {
    title: 'Магазин | Next13 App',
    description: 'Тестовое приложение Next JS 13',
}

export default function Shop() {
    const [cart] = useState(dataCart);

    const products = cart.map((product) => {
        return <ProductItem
            product={product}
            key={product.id}
        />;
    });

    return (
        <>
            <h1>страница Магазина</h1>
            <div className="flex gap-5">
                {products}
            </div>
        </>
    )
}