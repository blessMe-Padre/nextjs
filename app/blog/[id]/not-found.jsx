"use client";

import React from 'react';

import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1 className="text-center text-5xl mb-10">Такого поста не существует!</h1>
            <p className="text-2xl text-center">перейти на <Link className="text text-color-blue underline" href={'/'}>главную</Link></p>
        </div>
    );
}