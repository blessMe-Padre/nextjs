export const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error("Не удалось получить сообщения");

    return response.json();
};

export const getPostsBySearch = async (search) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${search}`
    );

    if (!response.ok) throw new Error("Unable to fetch posts.");

    return response.json();
};