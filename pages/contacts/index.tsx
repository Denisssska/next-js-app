import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export type objType = {
    "id": number
    "name": string
    "username": string
    "email": string
    "address": {
        "street": string
        "suite": string
        "city": string
        "zipcode": string
        "geo": {
            "lat": string
            "lng": string
        }
    },
    "phone": string
    "website": string
    "company": {
        "name": string
        "catchPhrase": string
        "bs": string
    }
};

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {data}
    }
}
const Comments: ({data}: { data: Array<objType> }) => JSX.Element = ({data}) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading text='Contacts list:' tag={'h1'}/>
            <main>
                <ul>
                    {data && data.map(({id, name}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}
export default Comments