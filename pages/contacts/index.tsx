import styles from "../../styles/Home.module.scss";
import Heading from "../../components/heading";
import Head from "next/head";

export default function Comments() {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <main>
                <Heading text='Contacts list:' tag={'h1'}/>
            </main>

        </>
    )
}