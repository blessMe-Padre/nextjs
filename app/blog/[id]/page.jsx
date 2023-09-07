
export async function generateMetadata({ params: { id } }) {
    const post = await getData(id);

    return {
        title: `Next13 | ${post.title}`,
    };
}

async function getData(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    return response.json();
}

export default async function Post({ params: { id } }) {
    const post = await getData(id);

    return (
        <div className="py-20">
            <h1 className="text-3xl mb-7">Заголовок поста: {post.title}</h1>
            <p className="text-lg">Текст поста: {post.body}</p>
        </div>
    );
}
