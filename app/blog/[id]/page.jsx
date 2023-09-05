export function generateMetadata({id}) {
    return {
        title: id,
    };
}

export default function Post({id}) {
    return <h1>Страница{id}одного поста</h1>
}