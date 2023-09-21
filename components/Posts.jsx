import Link from "next/link";

export default function Posts({ posts }) {
    return (
        <ol className="text list-decimal">
            {posts.map((post) => (
                <li className="text-lg py-1 underline" key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ol>
    )
}
