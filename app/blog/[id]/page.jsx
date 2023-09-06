
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
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}
