import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Heading from "../components/Heading";
import {GetStaticProps, GetStaticPropsResult, InferGetStaticPropsType} from "next";
import Socials from "../components/Socials";

export type SocialType = {
    id: number
    icon: string
    path: string
}
export type SocialProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps: GetStaticProps = async (): Promise<GetStaticPropsResult<{ socials: SocialType[] }>> => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/socials/`);
        const socials = await data.json()
        if (!socials) return {notFound: true};

        return {props: {socials}};
    } catch (e: any) {
        console.log(e.message)
        return {props: {socials:[]|| null}}
    }

};

const Home: ({socials}: { socials: SocialType[] }) => JSX.Element = ({socials}) => {
    console.log(socials)
    return (
        <>
            <Head>
                <meta name="Den Yarmoshko" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <title>Create Next App</title>
            </Head>
            <main className={styles.main}>
                <Heading text='Hi Den!' tag={'h1'}/>
                <Socials socials={socials}/>
            </main>

        </>
    )
}
export default Home