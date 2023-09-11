import ProductList from "@/components/ProductList"

export const metadata = {
    title: 'Магазин | Next13 App',
    description: 'Тестовое приложение Next JS 13',
}

export default function Shop() {
    return (
        <>
            <h1>страница Магазина</h1>
            <ProductList/>
        </>
    )
}