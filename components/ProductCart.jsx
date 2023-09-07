import Image from "next/image";
import Counter from "./Counter";


export default function ProductCart({ product, deleteProduct }) {
    const { img, title, price, id } = product;

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
            <Counter />
            <p>{price} руб</p>
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
