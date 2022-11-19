import React, {useEffect} from 'react';
import Heading from "../components/heading";
import styles from '../styles/404.module.scss';
import {useRouter} from "next/router";
import Head from "next/head";

const Error = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [router])
    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <main>
                <Heading text={'404'}/>
                <Heading tag={'h2'} text={'Page not found'}/>
            </main>
        </>
    );
};

export default Error;