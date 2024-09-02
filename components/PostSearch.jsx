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
                className='text-color-main-black p-2 mr-5'
                type="search"
                placeholder='поиск'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <button className='border-2 p-2' type='submit'>Поиск</button>
        </form>
    )
}
