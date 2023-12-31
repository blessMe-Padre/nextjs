"use client";
export default function CartOrder({ total }) {
    const priceFormatter = new Intl.NumberFormat();

    const { count, price } = total;
    const discount = 15;
    const totalCost = price - (price * discount / 100);

    return (
        <div className="bg-color-grey p-5 rounded text-color-main-black">
            <h3 className="font-bold text-xl mb-8">Ваш заказ:</h3>
            <div className="flex justify-between mb-7">
                <span>Товаров в заказе:</span>
                <span>{priceFormatter.format(count)} ед.</span>
            </div>
            <div className="flex justify-between mb-7">
                <span>Сумма заказа:</span>
                <span>{priceFormatter.format(price)} руб.</span>
            </div>
            <div className="flex justify-between mb-7">
                <span>Ваша скидка:</span>
                <span>{discount}%</span>
            </div>
            <div>
                <p className="font-bold text-xl mb-2">Итого</p>
                <div className="flex justify-between mb-7">
                    <span>без учёта доставки:</span>
                    <span>{priceFormatter.format(totalCost)} ₽</span>
                </div>
            </div>
        </div>
    )
}
