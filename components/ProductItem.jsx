import Image from "next/image";

export default function ProductItem({ product }) {
    const { img, title, price, descriptions } = product;

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
            <button className="bg-color-button p-2 rounded">Добавить в корзину</button>
        </div>
    )
}
