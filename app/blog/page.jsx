import Link from "next/link";


async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
            <h1 className="text-3xl font-bold underline text">
                страница приложения "Блог"
            </h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
