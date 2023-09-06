"use client";

import Image from "next/image";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleChange = (e) => {
        setCount(parseInt(e.target.value));
    };


    return (
        <div className="flex">
            <button type='button' onClick={decrementCount}>
                <Image
                    src={"/icon-minus.svg"}
                    width={12}
                    height={2}
                    alt="minus"
                    className=""
                />
            </button>

            <input className="w-6 mx-3 text-color-white bg-color-shark" type='number' value={count} onChange={handleChange} />

            <button type='button' onClick={incrementCount}>
                <Image
                    src={"/icon-plus.svg"}
                    width={12}
                    height={12}
                    alt="plus"
                    className=""
                />
            </button>
        </div>
    )
}
