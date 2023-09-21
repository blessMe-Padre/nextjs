"use client";

import { getPostsBySearch } from '@/services/getPost';
import React, { useState } from 'react'

export default function PostSearch({ onSearch }) {
    const [search, setSearch] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const posts = await getPostsBySearch(search);
        onSearch(posts);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder='поиск'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button type='submit'>Поиск</button>
        </form>
    )
}
