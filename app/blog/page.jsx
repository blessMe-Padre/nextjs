import Link from "next/link";


async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 5,
        }
    });

    if (!response.ok) throw new Error('Невозможно загрузить данные');

    return response.json();
}

export const metadata = {
    title: 'Блог | Next13 App',
    description: 'Тестовое приложение Next JS 13',
}

export default async function Blog() {

    const posts = await getData();

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">
                страница приложения "Блог"
            </h1>
            <ol className="text list-decimal">
                {posts.map((post) => (
                    <li className="text-lg py-1 underline" key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </>
    );
}
