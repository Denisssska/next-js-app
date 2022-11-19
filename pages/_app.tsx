import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from "../components/layout";
import Image from 'next/image';
import Dev from '../public/0_M4bxiCIjcTK-2Xr6.jpeg';
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&display=swap"
                      rel="stylesheet"/>
                <title>App title</title>
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
            <Image style={{width: '100%'}} src={Dev} alt='preview' placeholder='blur' />
        </Layout>
    )

}
