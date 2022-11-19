import styles from "../../styles/Home.module.scss";
import Heading from "../../components/heading";
import Head from "next/head";
import {useEffect, useState} from "react";
import {NextPage} from "next";

type objType = {
    "id": number,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

export const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return{
        props:{data}
    }
}
const Comments:({data}: { data: Array<objType> }) => JSX.Element=({data})=> {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts list:' tag={'h1'}/>
            <main>
                <ul>
                    {data && data.map(({id, name, email}) => (
                        <li key={id}><strong>{name}</strong>{email}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
export default Comments