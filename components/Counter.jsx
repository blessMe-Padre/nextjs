"use client";

import Image from "next/image";

export default function Counter({ count, increase, decrease, changeValue, id }) {

    return (
        <div className="flex">
            <button type='button'
             onClick={decrease.bind(null, id)}
             >
                <Image
                    src={"/icon-minus.svg"}
                    width={12}
                    height={2}
                    alt="minus"
                    className=""
                />
            </button>

            <input
                onChange={(e) => { changeValue(id, +e.target.value) }}
                className="w-6 mx-3 text-color-white bg-color-shark"
                type='number'
                value={count}
             />

            <button type='button'
             onClick={increase.bind(null, id)}
             >
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
