import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export type PostsType = {
    userId: number
    id: number
    title: string
    body: string
};

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {posts: data}
    }
}
const Posts: ({posts}: { posts: Array<PostsType> }) => JSX.Element = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text='Posts list:' tag={'h1'}/>
            <main>
                <ul>
                    {posts && posts.map(({id, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
export default Posts