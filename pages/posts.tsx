import Head from 'next/head'
import Heading from "../components/heading";

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <main>
                <Heading text='Posts:' tag={'h1'}/>
            </main>

        </>
    )
}
