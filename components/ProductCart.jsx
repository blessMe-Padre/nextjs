"use client";

import Image from "next/image";
import Counter from "./Counter";


export default function ProductCart({ product, deleteProduct, increase, decrease, changeValue }) {
    const { img, title, count, id, price, priceTotal } = product;
    const priceFormatter = new Intl.NumberFormat();

    return (
        <div className="flex items-center justify-between gap-5 p-5 border-b-2">
            <div className="flex items-center justify-center">
                <Image
                    src={`/${img}`}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                    className=""
                />
            </div>
            <p>{title}</p>
            <Counter 
                count={count}
                changeValue={changeValue}
                increase={increase}
                decrease={decrease}
                id={id}
            />
            <p>{priceFormatter.format(priceTotal)} руб</p>
            <div className="flex items-center justify-center">
                <button onClick={ () =>{deleteProduct(id);} }>
                    <Image
                        src={"/icon-delete.svg"}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                        className=""
                    />
                </button>
            </div>
        </div>
    )
}
