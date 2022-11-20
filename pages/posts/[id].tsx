import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import type {
    NextPage,
    GetStaticPaths,
    GetStaticPathsContext,
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next';
import {ParsedUrlQuery} from 'querystring';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const getPosts = async (id: string): Promise<Post[]> => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await posts.json();
};

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
): Promise<GetStaticPropsResult<{ posts: Post[] }>> => {
    const {params} = context as { params: Params };
    const {id} = params;
    const posts = await getPosts(id);
    if (!posts) return {notFound: true};

    return {props: {posts}, revalidate: 1};
};

export const getStaticPaths: GetStaticPaths = async (
    // You don't need context unless you want to use locale and defaultLocale
    context: GetStaticPathsContext
): Promise<GetStaticPathsResult> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    // @ts-ignore
    const paths = data.map(({id}) => ({
        params: {id: id.toString()},
    }))
    console.log(paths)
    return {paths, fallback: false};
};

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;
const Post: NextPage = ({posts}: PostProps) => {
    return (
        <>
            <Head>
                <title>Post</title>
            </Head>
            <main>
                <PostInfo post={posts}/>
            </main>


        </>
    );
};
export default Post