"use client";

import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/getPost";

import { useEffect, useState } from "react";

export const metadata = {
    title: 'Блог | Next13 App',
    description: 'Тестовое приложение Next JS 13',
}

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false));
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">
                страница приложения "Блог"
            </h1>

            <PostSearch onSearch={setPosts} />

            {loading ? <h3>Загрузка</h3> : (
                <Posts posts={posts} />
            )}
        </>
    );
}
