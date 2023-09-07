import Image from "next/image";

import { useDispatch, useSelector } from 'react-redux';
import { setItemInCart, deleteItemFromCart } from "@/redux/reducer";


export default function ProductItem({ product }) {
    const { img, title, price, descriptions } = product;

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemInCart);
    const isItemInCart = items.some(item => item.id === product.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(product.id))
        } else {
            dispatch(setItemInCart(product))
        }
    }

    return (
        <div className="p-7 max-w-sm shadow-md shadow-color-blue bg-color-light-black flex flex-col justify-between">
            <div>
                <Image
                    src={`/${img}`}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    className="m-auto mb-4"
                />
                <h3 className="text-3xl mb-5">{title}</h3>
                <p className="mb-7">{descriptions}</p>
                <p className="mb-5 text-lg">Цена: {price} руб</p>
            </div>

            {isItemInCart ?
                <button onClick={handleClick} className="bg-color-grey text-color-main-black p-2 rounded">Убрать из корзину</button>
                : <button onClick={handleClick} className="bg-color-button p-2 rounded">Добавить в корзину</button>
            }
            
        </div>
    )
}
